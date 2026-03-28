import { n as private_env } from "../../../../chunks/shared-server.js";
import { json } from "@sveltejs/kit";
//#region src/routes/api/contact/+server.ts
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
/** Prefer the real page origin so localhost vs 127.0.0.1 matches how the user opened the site. */
function originForUpstream(request, fallback) {
	const h = request.headers.get("origin")?.trim();
	if (h && h.toLowerCase() !== "null") return h;
	return fallback?.trim();
}
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var MESSAGE_MAX = 1e4;
function validateName(trimmed) {
	if (trimmed.length === 0) return "Name is required.";
	if (trimmed.length <= 3) return "Name must be more than 3 characters.";
	if (trimmed.length >= 100) return "Name must be less than 100 characters.";
	return null;
}
function validateEmail(trimmed) {
	if (trimmed.length === 0) return "Email is required.";
	if (trimmed.length > 254) return "Email is too long.";
	if (!EMAIL_RE.test(trimmed)) return "Please enter a valid email address.";
	return null;
}
function validateMessage(trimmed) {
	if (trimmed.length === 0) return "Message is required.";
	if (trimmed.length > MESSAGE_MAX) return `Message must be at most ${MESSAGE_MAX} characters.`;
	return null;
}
function validationError(message, errors) {
	return json({
		success: false,
		message,
		...errors ? { errors } : {}
	}, { status: 400 });
}
var POST = async ({ request }) => {
	const apiUrl = private_env.NEUROCORTEX_CONTACT_API_URL;
	const secret = private_env.NEUROCORTEX_CONTACT_API_SECRET;
	const origin = originForUpstream(request, private_env.NEUROCORTEX_CONTACT_ORIGIN);
	if (!apiUrl?.trim() || !secret?.trim()) return json({
		success: false,
		message: "Contact form is temporarily unavailable. Please try again later or email us directly."
	}, { status: 503 });
	if (!origin) return json({
		success: false,
		message: "Contact form is misconfigured (missing Origin). Set NEUROCORTEX_CONTACT_ORIGIN for this environment."
	}, { status: 503 });
	let body;
	try {
		body = await request.json();
	} catch {
		return json({
			success: false,
			message: "Invalid request body."
		}, { status: 400 });
	}
	if (body === null || typeof body !== "object" || Array.isArray(body)) return json({
		success: false,
		message: "Invalid request body."
	}, { status: 400 });
	const o = body;
	const nameRaw = typeof o.name === "string" ? o.name : "";
	const emailRaw = typeof o.email === "string" ? o.email : "";
	const messageRaw = typeof o.message === "string" ? o.message : "";
	const companyRaw = typeof o.company === "string" ? o.company : "";
	const name = nameRaw.trim();
	const email = emailRaw.trim();
	const message = messageRaw.trim();
	const company = companyRaw.trim();
	const fieldErrors = {};
	const nameErr = validateName(name);
	const emailErr = validateEmail(email);
	const messageErr = validateMessage(message);
	if (nameErr) fieldErrors.name = [nameErr];
	if (emailErr) fieldErrors.email = [emailErr];
	if (messageErr) fieldErrors.message = [messageErr];
	if (nameErr || emailErr || messageErr) return validationError(nameErr ?? emailErr ?? messageErr ?? "Please check the form.", fieldErrors);
	const upstreamBody = {
		name,
		email,
		message,
		neurocortex: true
	};
	if (company.length > 0) upstreamBody.company = company;
	let upstream;
	try {
		upstream = await fetch(apiUrl.trim(), {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"X-Contact-Key": secret.trim(),
				Origin: origin.trim()
			},
			body: JSON.stringify(upstreamBody)
		});
	} catch {
		return json({
			success: false,
			message: "Could not reach the mail service. Please try again later or email us directly."
		}, { status: 502 });
	}
	const text = await upstream.text();
	let parsed = {};
	if (text) try {
		parsed = JSON.parse(text);
	} catch {
		parsed = {};
	}
	if (upstream.ok) return json({
		success: true,
		message: parsed.message ?? "Thank you. Your message has been sent."
	}, { status: 200 });
	if (upstream.status === 403) return json({
		success: false,
		message: "We could not send your message. Please try again later or use the email address on this page."
	}, { status: 502 });
	return json({
		success: false,
		message: typeof parsed.message === "string" && parsed.message.length > 0 ? parsed.message : "Something went wrong. Please try again.",
		...parsed.errors && typeof parsed.errors === "object" ? { errors: parsed.errors } : {}
	}, { status: upstream.status });
};
//#endregion
export { POST };
