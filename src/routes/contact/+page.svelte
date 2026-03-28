<script>
	const MESSAGE_MAX = 10_000;
	const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	let name = '';
	let email = '';
	let message = '';
	/** Honeypot — must stay empty; forwarded as `company` only when non-empty. */
	let company = '';

	let submitting = false;
	let formError = '';
	/** @type {Record<string, string>} */
	let fieldErrors = {};

	let successDialog = /** @type {HTMLDialogElement | null} */ (null);
	let successMessage = '';

	function validateClient() {
		formError = '';
		fieldErrors = {};
		const nameT = name.trim();
		const emailT = email.trim();
		const messageT = message.trim();
		/** @type {Record<string, string>} */
		const errors = {};

		if (nameT.length === 0) errors.name = 'Name is required.';
		else if (nameT.length <= 3) errors.name = 'Name must be more than 3 characters.';
		else if (nameT.length >= 100) errors.name = 'Name must be less than 100 characters.';

		if (emailT.length === 0) errors.email = 'Email is required.';
		else if (emailT.length > 254) errors.email = 'Email is too long.';
		else if (!EMAIL_RE.test(emailT)) errors.email = 'Please enter a valid email address.';

		if (messageT.length === 0) errors.message = 'Message is required.';
		else if (messageT.length > MESSAGE_MAX)
			errors.message = `Message must be at most ${MESSAGE_MAX} characters.`;

		fieldErrors = errors;
		if (Object.keys(errors).length > 0) {
			formError = 'Please fix the errors below.';
			return false;
		}
		return true;
	}

	/**
	 * Sync wrapper so preventDefault runs before any await (avoids native form submit / mailto fallback).
	 * @param {SubmitEvent} e
	 */
	function handleSubmit(e) {
		e.preventDefault();
		void submitContactForm();
	}

	async function submitContactForm() {
		if (submitting) return;
		if (!validateClient()) return;

		submitting = true;
		formError = '';
		fieldErrors = {};

		const body = {
			name: name.trim(),
			email: email.trim(),
			message: message.trim(),
			...(company.trim() ? { company: company.trim() } : {})
		};

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body)
			});

			/** @type {{ success?: boolean; message?: string; errors?: Record<string, unknown> }} */
			let data = {};
			try {
				data = await res.json();
			} catch {
				data = {};
			}

			if (res.ok && data.success === true) {
				successMessage =
					typeof data.message === 'string' && data.message.length > 0
						? data.message
						: 'Your message has been sent.';
				name = '';
				email = '';
				message = '';
				company = '';
				successDialog?.showModal();
			} else {
				formError =
					typeof data.message === 'string' && data.message.length > 0
						? data.message
						: 'Something went wrong. Please try again.';
				if (data.errors && typeof data.errors === 'object' && data.errors !== null) {
					/** @type {Record<string, string>} */
					const fe = {};
					for (const [k, v] of Object.entries(data.errors)) {
						if (Array.isArray(v) && typeof v[0] === 'string') fe[k] = v[0];
						else if (typeof v === 'string') fe[k] = v;
					}
					fieldErrors = fe;
				}
			}
		} catch {
			formError = 'Network error. Please check your connection and try again.';
		} finally {
			submitting = false;
		}
	}

	function closeSuccessDialog() {
		successDialog?.close();
	}

	/** @param {MouseEvent} e */
	function onDialogBackdropClick(e) {
		if (e.target === successDialog) closeSuccessDialog();
	}
</script>

<svelte:head>
	<title>Contact | NeuroCortex Ltd</title>
	<meta
		name="description"
		content="Get in touch with NeuroCortex Ltd for AI systems, software development, and collaboration."
	/>
</svelte:head>

<section class="relative isolate overflow-hidden py-20 sm:py-24">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_80%_24%,rgba(99,102,241,0.16),transparent_32%),radial-gradient(circle_at_50%_78%,rgba(14,116,144,0.14),transparent_44%)]"
	></div>

	<div class="page-shell">
		<div class="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_1fr]">
			<div>
				<p class="text-xs font-semibold uppercase tracking-[0.14em] text-sky-300">Contact</p>
				<h1 class="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
					Let's build something useful
				</h1>
				<p class="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
					Share your idea, challenge, or project scope. We will get back to you within 1-2 business
					days.
				</p>

				<div class="mt-8 space-y-3 text-sm text-slate-300">
					<p>
						<span class="font-medium text-slate-100">Email:</span>
						<a class="text-sky-300 hover:text-sky-200" href="mailto:transform@clintondavis.com"
							>transform@clintondavis.com</a
						>
					</p>
					<p><span class="font-medium text-slate-100">Location:</span> Ireland</p>
				</div>
			</div>

			<form
				class="relative rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-[0_0_60px_-30px_rgba(56,189,248,0.4)] backdrop-blur-sm sm:p-8"
				method="post"
				onsubmit={handleSubmit}
				novalidate
			>
				<noscript>
					<div
						class="mb-6 rounded-xl border border-amber-500/40 bg-amber-950/40 px-4 py-3 text-sm text-amber-100"
					>
						JavaScript is required to send this form. Email us at
						<a class="text-sky-300 underline" href="mailto:transform@clintondavis.com"
							>transform@clintondavis.com</a
						>.
					</div>
				</noscript>
				{#if formError}
					<div
						class="mb-6 rounded-xl border border-amber-500/40 bg-amber-950/40 px-4 py-3 text-sm text-amber-100"
						role="alert"
					>
						{formError}
					</div>
				{/if}

				<div
					class="absolute -left-[9999px] top-0 h-px w-px overflow-hidden opacity-0"
					aria-hidden="true"
				>
					<label for="contact-company">Company</label>
					<input
						id="contact-company"
						name="company"
						type="text"
						tabindex="-1"
						autocomplete="off"
						bind:value={company}
					/>
				</div>

				<label class="block text-sm font-medium text-slate-200" for="name">Name</label>
				<input
					class="mt-2 w-full rounded-xl border px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30 {fieldErrors.name
						? 'border-amber-500/60 bg-slate-950/60 focus:border-amber-400'
						: 'border-slate-700 bg-slate-950/60 focus:border-sky-400'}"
					id="name"
					name="name"
					type="text"
					placeholder="Your name"
					autocomplete="name"
					bind:value={name}
				/>
				{#if fieldErrors.name}
					<p class="mt-1.5 text-sm text-amber-200/90">{fieldErrors.name}</p>
				{/if}

				<label class="mt-5 block text-sm font-medium text-slate-200" for="email">Email</label>
				<input
					class="mt-2 w-full rounded-xl border px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30 {fieldErrors.email
						? 'border-amber-500/60 bg-slate-950/60 focus:border-amber-400'
						: 'border-slate-700 bg-slate-950/60 focus:border-sky-400'}"
					id="email"
					name="email"
					type="email"
					placeholder="you@company.com"
					autocomplete="email"
					inputmode="email"
					bind:value={email}
				/>
				{#if fieldErrors.email}
					<p class="mt-1.5 text-sm text-amber-200/90">{fieldErrors.email}</p>
				{/if}

				<label class="mt-5 block text-sm font-medium text-slate-200" for="message">Message</label>
				<textarea
					class="mt-2 min-h-32 w-full rounded-xl border px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30 {fieldErrors.message
						? 'border-amber-500/60 bg-slate-950/60 focus:border-amber-400'
						: 'border-slate-700 bg-slate-950/60 focus:border-sky-400'}"
					id="message"
					name="message"
					placeholder="Tell us about your project..."
					autocomplete="off"
					bind:value={message}
				></textarea>
				{#if fieldErrors.message}
					<p class="mt-1.5 text-sm text-amber-200/90">{fieldErrors.message}</p>
				{/if}

				<button
					class="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 disabled:cursor-not-allowed disabled:opacity-60"
					type="submit"
					disabled={submitting}
				>
					{submitting ? 'Sending…' : 'Send Message'}
				</button>
			</form>
		</div>
	</div>
</section>

<dialog
	bind:this={successDialog}
	class="fixed left-1/2 top-1/2 z-50 m-0 max-h-[min(90vh,100%)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-6 text-slate-100 shadow-[0_0_80px_-20px_rgba(56,189,248,0.5)] backdrop:bg-slate-950/70 backdrop:backdrop-blur-sm sm:max-w-md"
	onclick={onDialogBackdropClick}
>
	<p class="text-xs font-semibold uppercase tracking-[0.14em] text-sky-300">Message sent</p>
	<p class="mt-3 text-base leading-relaxed text-slate-200">{successMessage}</p>
	<button
		type="button"
		class="mt-6 w-full rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
		onclick={closeSuccessDialog}
	>
		Close
	</button>
</dialog>
