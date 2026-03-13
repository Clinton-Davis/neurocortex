<script lang="ts">
	import AboutHero from './AboutHero.svelte';
	import ClosingSection from './ClosingSection.svelte';
	import FounderSection from './FounderSection.svelte';
	import MissionSection from './MissionSection.svelte';
	import ValuesSection from './ValuesSection.svelte';
</script>

<svelte:head>
	<title>About NeuroCortex | AI, Software, Human Intelligence</title>
	<meta
		name="description"
		content="Learn about NeuroCortex Ltd, our mission, values, and approach to building technology that helps humans think better."
	/>
</svelte:head>

<div class="relative isolate overflow-hidden bg-slate-950">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-x-0 -top-56 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
	>
		<div
			style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
			class="aspect-1108/632 w-312 flex-none bg-linear-to-r from-sky-400/25 via-indigo-500/20 to-violet-500/25 opacity-45"
		></div>
	</div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_14%,rgba(56,189,248,0.16),transparent_38%),radial-gradient(circle_at_82%_22%,rgba(99,102,241,0.16),transparent_32%),radial-gradient(circle_at_50%_74%,rgba(14,116,144,0.14),transparent_44%)]"
	></div>

	<main class="relative">
		<AboutHero />
		<MissionSection />
		<ValuesSection />

		<FounderSection />
		<ClosingSection />
	</main>

	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-x-0 -bottom-40 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
	>
		<div
			style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
			class="aspect-1318/752 w-336 flex-none bg-linear-to-r from-sky-500/20 via-indigo-500/20 to-violet-500/25 opacity-35"
		></div>
	</div>
</div>
