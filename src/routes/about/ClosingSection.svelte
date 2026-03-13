<script lang="ts">
	import { aboutContent } from './about-content';

	const { closing } = aboutContent;
</script>

<section class="about-section px-6 pt-16 pb-24 lg:px-8 lg:pt-24 lg:pb-32">
	<div class="about-container">
		<div class="relative mx-auto max-w-4xl text-center">
			<div
				aria-hidden="true"
				class="pointer-events-none absolute left-1/2 top-3 -z-10 h-36 w-36 -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl"
			></div>
			<h2 class="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
				{closing.title}
			</h2>
			<p
				class="mx-auto mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl"
			>
				{closing.goal}
			</p>
			<div class="mx-auto mt-5 max-w-2xl space-y-2">
				{#each closing.paragraphs as paragraph}
					<p class="text-base text-slate-300">{paragraph}</p>
				{/each}
			</div>
		</div>
	</div>
</section>
