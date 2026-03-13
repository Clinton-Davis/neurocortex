<script lang="ts">
	import { aboutContent } from './about-content';

	const { mission } = aboutContent;

	const missionPairings = mission.bullets.map((bullet) => {
		const [left, right] = bullet.split(' and ');
		return {
			left: left?.trim() ?? bullet,
			right: right?.trim() ?? ''
		};
	});
</script>

<section class="about-section px-6 py-14 lg:px-8 lg:py-20">
	<div class="about-container">
		<div class="grid gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:gap-16">
			<div>
				<h2 class="about-subheading">{mission.title}</h2>
				<div class="mt-7 max-w-3xl space-y-5">
					{#each mission.paragraphs as paragraph}
						<p class="text-base leading-8 text-slate-300">{paragraph}</p>
					{/each}
				</div>
				<div class="mt-8 max-w-3xl space-y-5">
					{#each mission.closing as paragraph}
						<p class="text-base leading-8 text-slate-300">{paragraph}</p>
					{/each}
				</div>
			</div>

			<div
				class="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/55 p-7 shadow-[0_0_65px_-32px_rgba(99,102,241,0.6)] backdrop-blur-sm sm:p-8"
			>
				<div
					aria-hidden="true"
					class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(56,189,248,0.22),transparent_42%),radial-gradient(circle_at_84%_82%,rgba(129,140,248,0.2),transparent_48%)]"
				></div>
				<p class="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Core Synergies</p>
				<ul class="mt-6 space-y-4">
					{#each missionPairings as pairing}
						<li class="rounded-2xl border border-slate-800/70 bg-slate-950/55 px-4 py-4">
							<p class="text-sm leading-6 text-slate-300">
								<span class="font-medium text-slate-100">{pairing.left}</span>
								{#if pairing.right}
									<span class="mx-2 text-sky-300/80">/</span>
									<span>{pairing.right}</span>
								{/if}
							</p>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
