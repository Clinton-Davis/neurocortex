<script lang="ts">
	import { aboutContent } from './about-content';

	const { values } = aboutContent;
</script>

<section class="about-section px-6 py-16 lg:px-8 lg:py-24">
	<div class="about-container">
		<div
			class="relative overflow-hidden rounded-[2rem] border border-slate-700/80 bg-linear-to-br from-slate-900/80 via-slate-900/70 to-indigo-950/30 p-8 shadow-[0_0_85px_-35px_rgba(56,189,248,0.5)] sm:p-10 lg:p-12"
		>
			<div
				aria-hidden="true"
				class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_20%,rgba(56,189,248,0.24),transparent_38%),radial-gradient(circle_at_10%_88%,rgba(129,140,248,0.22),transparent_42%)]"
			></div>
			<div class="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
				<div>
					<p class="about-kicker">Featured Project</p>
					<h2 class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">DeepJournal</h2>
					<p class="mt-5 max-w-2xl text-base leading-8 text-slate-300">
						{values.humanBridge[2]}
					</p>
				</div>
				<div class="rounded-2xl border border-slate-700/70 bg-slate-950/55 p-6 sm:p-7">
					<p class="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Core Direction</p>
					<div class="mt-4 space-y-2">
						{#each values.futureStatements as statement}
							<p class="text-sm leading-6 text-slate-300">{statement}</p>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
