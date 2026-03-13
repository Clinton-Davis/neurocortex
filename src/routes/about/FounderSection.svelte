<script lang="ts">
	import { aboutContent } from './about-content';

	const { founder } = aboutContent;
</script>

<section class="about-section px-6 py-14 lg:px-8 lg:py-20">
	<div class="about-container">
		<div class="grid gap-10 border-t border-slate-800/85 pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
			<div>
				<p class="about-kicker">{founder.title}</p>
				<h2 class="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{founder.name}</h2>
				<div class="mt-6 flex flex-wrap gap-3">
					<span class="rounded-full border border-slate-700/80 bg-slate-900/65 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-slate-200">
						Founder
					</span>
					<span class="rounded-full border border-sky-500/35 bg-sky-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-sky-200">
						NeuroCortex Ltd
					</span>
					<!-- <span class="rounded-full border border-indigo-400/35 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-indigo-200">
						AI Systems Architect
					</span> -->
				</div>
				<p class="mt-6 max-w-md text-sm leading-7 text-slate-400">{founder.role}</p>
			</div>

			<div class="max-w-3xl space-y-5">
				{#each founder.paragraphs as paragraph}
					<p class="text-base leading-8 text-slate-300">{paragraph}</p>
				{/each}
			</div>
		</div>
	</div>
</section>
