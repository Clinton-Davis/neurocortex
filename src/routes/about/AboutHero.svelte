<script lang="ts">
	import { aboutContent } from './about-content';

	const { hero } = aboutContent;
</script>

<section class="about-section px-6 pt-20 pb-8 lg:px-8 lg:pt-28">
	<div class="about-container">
		<div class="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
			<div>
				<p class="about-kicker">NeuroCortex Ltd</p>
				<h1 class="mt-6 max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
					{hero.headline}
				</h1>
				<div class="mt-8 max-w-2xl space-y-5">
					{#each hero.intro as paragraph}
						<p class="text-base leading-8 text-slate-300 sm:text-lg">{paragraph}</p>
					{/each}
				</div>
				<p
					class="mt-9 max-w-2xl border-l border-sky-400/40 pl-5 text-xl font-semibold tracking-tight text-slate-100 sm:text-2xl"
				>
					{hero.goal}
				</p>
			</div>

			<div class="relative mx-auto w-full max-w-xl lg:mx-0">
				<div
					class="relative aspect-square overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900/60 shadow-[0_0_90px_-28px_rgba(56,189,248,0.36)] backdrop-blur-sm"
				>
					<div
						class="absolute inset-0 bg-[radial-gradient(circle_at_34%_32%,rgba(56,189,248,0.24),transparent_44%),radial-gradient(circle_at_69%_67%,rgba(99,102,241,0.24),transparent_52%),linear-gradient(140deg,rgba(15,23,42,0.95),rgba(2,6,23,0.88))]"
					></div>
					<div class="absolute inset-0 flex items-center justify-center p-10 sm:p-12">
						<img
							src="/NeuroCortextLogoRoundedFavicon.svg"
							alt="NeuroCortex logo"
							class="h-full w-full max-h-[21rem] max-w-[21rem] object-contain opacity-95 drop-shadow-[0_0_40px_rgba(56,189,248,0.28)]"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
