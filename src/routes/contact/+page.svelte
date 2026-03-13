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
					<!-- <p><span class="font-medium text-slate-100">Hours:</span> Mon-Thurs, 18:00-21:00 CET</p> -->
				</div>
			</div>

			<form
				class="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-[0_0_60px_-30px_rgba(56,189,248,0.4)] backdrop-blur-sm sm:p-8"
				action="mailto:transform@clintondavis.com"
				method="post"
				enctype="text/plain"
			>
				<label class="block text-sm font-medium text-slate-200" for="name">Name</label>
				<input
					class="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
					id="name"
					name="name"
					type="text"
					placeholder="Your name"
					required
				/>

				<label class="mt-5 block text-sm font-medium text-slate-200" for="email">Email</label>
				<input
					class="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
					id="email"
					name="email"
					type="email"
					placeholder="you@company.com"
					required
				/>

				<label class="mt-5 block text-sm font-medium text-slate-200" for="message">Message</label>
				<textarea
					class="mt-2 min-h-32 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
					id="message"
					name="message"
					placeholder="Tell us about your project..."
					required
				></textarea>

				<button
					class="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
					type="submit"
				>
					Send Message
				</button>
			</form>
		</div>
	</div>
</section>
