/**
 * Proxies contact submissions to the Django NeuroCortex contact API.
 *
 * Required runtime env ($env/dynamic/private):
 * - NEUROCORTEX_CONTACT_API_URL — full POST URL (e.g. https://host/api/contact/neurocortex/)
 * - NEUROCORTEX_CONTACT_API_SECRET — shared secret; sent as X-Contact-Key
 * - NEUROCORTEX_CONTACT_ORIGIN — fallback Origin for upstream if the browser request has no Origin header
 *   (normal browser POSTs send Origin automatically; that value is forwarded so it must exist in
 *   Django NEUROCORTEX_CORS_ORIGINS — include both http://localhost:5173 and http://127.0.0.1:5173 in dev)
 */
import { json, type RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

/** Prefer the real page origin so localhost vs 127.0.0.1 matches how the user opened the site. */
function originForUpstream(request: Request, fallback: string | undefined): string | undefined {
	const h = request.headers.get('origin')?.trim();
	if (h && h.toLowerCase() !== 'null') return h;
	return fallback?.trim();
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MESSAGE_MAX = 10_000;

type FieldErrors = Record<string, string[]>;

function validateName(trimmed: string): string | null {
	if (trimmed.length === 0) return 'Name is required.';
	if (trimmed.length <= 3) return 'Name must be more than 3 characters.';
	if (trimmed.length >= 100) return 'Name must be less than 100 characters.';
	return null;
}

function validateEmail(trimmed: string): string | null {
	if (trimmed.length === 0) return 'Email is required.';
	if (trimmed.length > 254) return 'Email is too long.';
	if (!EMAIL_RE.test(trimmed)) return 'Please enter a valid email address.';
	return null;
}

function validateMessage(trimmed: string): string | null {
	if (trimmed.length === 0) return 'Message is required.';
	if (trimmed.length > MESSAGE_MAX) return `Message must be at most ${MESSAGE_MAX} characters.`;
	return null;
}

function validationError(message: string, errors?: FieldErrors) {
	return json({ success: false as const, message, ...(errors ? { errors } : {}) }, { status: 400 });
}

const LOG = '[api/contact]';

export const POST: RequestHandler = async ({ request }) => {
	const apiUrl = env.NEUROCORTEX_CONTACT_API_URL;
	const secret = env.NEUROCORTEX_CONTACT_API_SECRET;
	const originFallback = env.NEUROCORTEX_CONTACT_ORIGIN;
	const requestOriginHeader = request.headers.get('origin');
	const origin = originForUpstream(request, originFallback);

	console.log('apiUrl', apiUrl);
	console.log('secret', secret);
	console.log('originFallback', originFallback);
	console.log('requestOriginHeader', requestOriginHeader);
	console.log('origin', origin);

	if (!apiUrl?.trim() || !secret?.trim()) {
		return json(
			{
				success: false as const,
				message: 'Contact form is temporarily unavailable. Please try again later or email us directly.'
			},
			{ status: 503 }
		);
	}

	if (!origin) {
		return json(
			{
				success: false as const,
				message:
					'Contact form is misconfigured (missing Origin). Set NEUROCORTEX_CONTACT_ORIGIN for this environment.'
			},
			{ status: 503 }
		);
	}

	let body: unknown;
	try {
		body = await request.json();
	} catch {
		return json({ success: false as const, message: 'Invalid request body.' }, { status: 400 });
	}

	if (body === null || typeof body !== 'object' || Array.isArray(body)) {
		return json({ success: false as const, message: 'Invalid request body.' }, { status: 400 });
	}

	const o = body as Record<string, unknown>;
	console.log(`${LOG} json body`, {
		keys: Object.keys(o),
		neurocortex: o.neurocortex,
		neurocortexType: typeof o.neurocortex,
		name: typeof o.name === 'string' ? o.name : `(not a string: ${typeof o.name})`,
		email: typeof o.email === 'string' ? o.email : `(not a string: ${typeof o.email})`,
		message:
			typeof o.message === 'string'
				? `(length ${o.message.length}) ${o.message.slice(0, 120)}${o.message.length > 120 ? '…' : ''}`
				: `(not a string: ${typeof o.message})`,
		company: typeof o.company === 'string' ? `(length ${o.company.length})` : '(absent or not a string)'
	});

	if (o.neurocortex !== true) {
		return validationError('Request must include JSON boolean "neurocortex": true.', {
			neurocortex: ['Must be the JSON literal true.']
		});
	}

	const nameRaw = typeof o.name === 'string' ? o.name : '';
	const emailRaw = typeof o.email === 'string' ? o.email : '';
	const messageRaw = typeof o.message === 'string' ? o.message : '';
	const companyRaw = typeof o.company === 'string' ? o.company : '';

	const name = nameRaw.trim();
	const email = emailRaw.trim();
	const message = messageRaw.trim();
	const company = companyRaw.trim();

	const fieldErrors: FieldErrors = {};
	const nameErr = validateName(name);
	const emailErr = validateEmail(email);
	const messageErr = validateMessage(message);
	if (nameErr) fieldErrors.name = [nameErr];
	if (emailErr) fieldErrors.email = [emailErr];
	if (messageErr) fieldErrors.message = [messageErr];

	if (nameErr || emailErr || messageErr) {
		const first = nameErr ?? emailErr ?? messageErr ?? 'Please check the form.';
		return validationError(first, fieldErrors);
	}

	const upstreamBody: Record<string, unknown> = {
		name,
		email,
		message,
		neurocortex: true
	};
	if (company.length > 0) {
		upstreamBody.company = company;
	}

	let upstream: Response;
	try {
		console.log(`${LOG} upstream fetch`, {
			url: apiUrl.trim(),
			OriginHeaderSent: origin.trim(),
			bodyKeys: Object.keys(upstreamBody)
		});
		upstream = await fetch(apiUrl.trim(), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
				'X-Contact-Key': secret.trim(),
				Origin: origin.trim()
			},
			body: JSON.stringify(upstreamBody)
		});
	} catch (err) {
		console.error(`${LOG} upstream fetch failed`, err);
		return json(
			{
				success: false as const,
				message: 'Could not reach the mail service. Please try again later or email us directly.'
			},
			{ status: 502 }
		);
	}

	const text = await upstream.text();
	console.log(`${LOG} upstream response`, {
		status: upstream.status,
		ok: upstream.ok,
		bodyPreview: text.slice(0, 500)
	});
	let parsed: { success?: boolean; message?: string; errors?: FieldErrors } = {};
	if (text) {
		try {
			parsed = JSON.parse(text) as typeof parsed;
		} catch {
			parsed = {};
		}
	}

	if (upstream.ok) {
		return json(
			{
				success: true as const,
				message: parsed.message ?? 'Thank you. Your message has been sent.'
			},
			{ status: 200 }
		);
	}

	if (upstream.status === 403) {
		return json(
			{
				success: false as const,
				message:
					'We could not send your message. Please try again later or use the email address on this page.'
			},
			{ status: 502 }
		);
	}

	const msg =
		typeof parsed.message === 'string' && parsed.message.length > 0
			? parsed.message
			: 'Something went wrong. Please try again.';

	return json(
		{
			success: false as const,
			message: msg,
			...(parsed.errors && typeof parsed.errors === 'object' ? { errors: parsed.errors } : {})
		},
		{ status: upstream.status }
	);
};
