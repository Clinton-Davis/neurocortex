<script lang="ts">
	import { aboutContent } from './about-content';

	const { values } = aboutContent;
</script>

<section class="about-section px-6 py-14 lg:px-8 lg:py-20">
	<div class="about-container">
		<div class="max-w-3xl">
			<p class="about-kicker">Principles</p>
			<h2 class="about-subheading mt-4">{values.title}</h2>
		</div>

		<div class="mt-10 grid gap-6 lg:grid-cols-2">
			<section class="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/55 p-7 sm:p-8">
				<div
					aria-hidden="true"
					class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(56,189,248,0.2),transparent_42%)]"
				></div>
				<h3 class="text-2xl font-semibold tracking-tight text-white">Higher Thinking</h3>
				<p class="mt-5 text-base leading-8 text-slate-300">{values.brainIntro}</p>
				<ul class="mt-5 space-y-2 text-sm leading-6 text-slate-300">
					{#each values.brainAbilities as ability}
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300/80"></span>
							<span>{ability}</span>
						</li>
					{/each}
				</ul>
				<p class="mt-5 text-sm leading-6 text-slate-300">{values.intelligenceStatement}</p>
				<p class="mt-4 text-sm leading-6 text-slate-300">{values.focusParagraph}</p>
				<p class="mt-4 text-sm leading-6 text-slate-300">{values.technologySupportsIntro}</p>
				<ul class="mt-4 space-y-2 text-sm leading-6 text-slate-300">
					{#each values.technologySupports as support}
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/80"></span>
							<span>{support}</span>
						</li>
					{/each}
				</ul>
			</section>

			<section class="rounded-3xl border border-slate-800/80 bg-slate-900/55 p-7 sm:p-8">
				<h3 class="text-2xl font-semibold tracking-tight text-white">Human Development</h3>
				<p class="mt-5 text-base leading-8 text-slate-300">{values.philosophyParagraph}</p>
				<p class="mt-4 text-sm leading-7 text-slate-300">{values.philosophyClosing}</p>
				<div class="mt-6 space-y-3 border-l border-slate-700/80 pl-4">
					{#each values.humanBridge.slice(0, 2) as paragraph}
						<p class="text-sm leading-6 text-slate-300">{paragraph}</p>
					{/each}
				</div>
				<div class="mt-7 space-y-2">
					{#each values.futureStatements as statement, i}
						<p class={i % 2 === 1 ? 'text-base font-semibold tracking-tight text-slate-100' : 'text-sm leading-6 text-slate-300'}>
							{statement}
						</p>
					{/each}
				</div>
			</section>
		</div>
	</div>
</section>
