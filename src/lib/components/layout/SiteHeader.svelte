<script>
	let mobileMenuOpen = false;
</script>

<div class="bg-slate-950 border-b border-slate-800">
	<header>
		<nav
			aria-label="Global"
			class="relative mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-12"
		>
			<div class="flex lg:hidden">
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">NeuroCortex Ltd</span>
					<img src="/nci_trans-light.png" alt="NeuroCortex Ltd logo" class="h-8 w-auto" />
				</a>
			</div>
			<div class="flex lg:hidden">
				<button
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-200"
					onclick={() => (mobileMenuOpen = true)}
				>
					<span class="sr-only">Open main menu</span>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						aria-hidden="true"
						class="size-6"
					>
						<path
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
			<div class="hidden lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2 lg:items-center lg:gap-x-10">
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">NeuroCortex Ltd</span>
					<img src="/nci_trans-light.png" alt="" class="h-8 w-auto" />
				</a>
				<a href="/about" class="text-sm/6 font-semibold text-slate-200 hover:text-white">About</a>
				<a href="/projects" class="text-sm/6 font-semibold text-slate-200 hover:text-white">Projects</a>
				<a href="/contact" class="text-sm/6 font-semibold text-slate-200 hover:text-white">Contact</a>
			</div>
		</nav>
		{#if mobileMenuOpen}
			<div class="lg:hidden">
				<div
					class="fixed inset-0 z-40 bg-black/20"
					role="button"
					tabindex="0"
					aria-label="Close menu backdrop"
					onclick={() => (mobileMenuOpen = false)}
					onkeydown={(event) => {
						if (event.key === 'Enter' || event.key === ' ') mobileMenuOpen = false;
					}}
				></div>
				<div
					class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-950 p-6 sm:max-w-sm sm:ring-1 sm:ring-slate-700"
				>
					<div class="flex items-center justify-between">
						<a href="/" class="-m-1.5 p-1.5">
							<span class="sr-only">NeuroCortex Ltd</span>
							<img src="/nci_trans-light.png" alt="" class="h-8 w-auto" />
						</a>
						<button
							type="button"
							class="-m-2.5 rounded-md p-2.5 text-slate-200"
							onclick={() => (mobileMenuOpen = false)}
						>
							<span class="sr-only">Close menu</span>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								aria-hidden="true"
								class="size-6"
							>
								<path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</button>
					</div>
					<div class="mt-6 flow-root">
						<div class="-my-6 divide-y divide-slate-700">
							<div class="space-y-2 py-6">
								<a
									href="/about"
									class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-slate-100 hover:bg-slate-800"
									>About</a
								>
								<a
									href="/projects"
									class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-slate-100 hover:bg-slate-800"
									>Projects</a
								>
								<a
									href="/contact"
									class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-slate-100 hover:bg-slate-800"
									>Contact</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</header>
</div>
