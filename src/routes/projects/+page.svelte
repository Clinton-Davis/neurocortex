<svelte:head>
	<title>Projects | NeuroCortex Ltd</title>
	<meta
		name="description"
		content="Applied work at the intersection of AI engineering, cognitive technology, and human transformation."
	/>
</svelte:head>

<script lang="ts">
	const projects = [
		{
			cat: 'product',
			badge: 'AI Product',
			icon: 'ti-cpu',
			color: 'emerald',
			logo: '/WiseWithinLogo.webp',
			title: 'WiseWithin',
			tagline:
				'AI-powered journaling and self-reflection app. Write, reflect, and understand your patterns more clearly.',
			roleLabel: 'NeuroCortex Built',
			roleText:
				'Full-stack SaaS product. AI reflection engine, emotion tracking, guided assessments, and personal insight profiles.',
			link: 'https://wisewithin.app'
		},
		{
			cat: 'coaching',
			badge: 'Human Transformation',
			icon: 'ti-flame',
			color: 'purple',
			logo: '/NewPhoenixLogoTrans 2.png',
			title: 'Clinton Davis Coaching',
			tagline:
				'Personal transformation programs helping poeple move from survival to freedom, in mind, body, and life.',
			roleLabel: 'NeuroCortex Built',
			roleText:
				'Brand platform, program architecture, and digital presence for the Phoenix coaching programs, Ashes to Infinite and Awaken to Freedom.',
			link: 'https://www.clintondavis.com'
		},
		{
			cat: 'client',
			badge: 'Client Work',
			icon: 'ti-brain',
			color: 'red',
			logo: '/neomasculinity-logo.png',
			title: 'NeoMasculinity Solutions',
			tagline:
				'A global initiative empowering individuals with critical thinking, self-agency, and authentic leadership.',
			roleLabel: 'NeuroCortex Contributed',
			roleText:
				'Critical thinking program design and curriculum frameworks to help individuals separate fact from fiction in the digital age.',
			link: 'https://www.neomasculinity.solutions'
		}
	];

	const badgeStyles: Record<string, string> = {
		cyan: 'bg-sky-400/10 text-sky-300 border border-sky-400/20',
		purple: 'bg-purple-400/10 text-purple-300 border border-purple-400/20',
		emerald: 'bg-emerald-400/10 text-emerald-300 border border-emerald-400/20',
		red: 'border text-[#df2f2f] bg-[#df2f2f]/10 border-[#df2f2f]/25'
	};

	const roleLabelStyles: Record<string, string> = {
		cyan: 'text-sky-300',
		purple: 'text-purple-300',
		emerald: 'text-emerald-300',
		red: 'text-[#df2f2f]'
	};

	const dividerStyles: Record<string, string> = {
		cyan: 'border-sky-400/15',
		purple: 'border-purple-400/15',
		emerald: 'border-emerald-400/15',
		red: 'border-[#df2f2f]/20'
	};

	const cardBorderStyles: Record<string, string> = {
		cyan: 'border-sky-400/30 hover:border-sky-400/50',
		purple: 'border-purple-400/30 hover:border-purple-400/50',
		emerald: 'border-emerald-400/30 hover:border-emerald-400/50',
		red: 'border-[#df2f2f]/30 hover:border-[#df2f2f]/50'
	};

</script>

<section class="relative isolate overflow-hidden">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(56,189,248,0.17),transparent_34%),radial-gradient(circle_at_78%_24%,rgba(99,102,241,0.17),transparent_30%),radial-gradient(circle_at_50%_78%,rgba(14,116,144,0.15),transparent_44%)]"
	></div>

	<div class="page-shell py-24 sm:py-28">
		<!-- Page header -->
		<div class="mx-auto max-w-3xl text-center">
			<p class="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Our Work</p>
			<h1 class="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">Projects</h1>
			<p class="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
				Applied work at the intersection of AI engineering, cognitive technology, and human
				transformation.
			</p>
		</div>

		<!-- Project cards -->
		<div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as project (project.title)}
				<div
					class="flex flex-col rounded-3xl border bg-white/3 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur transition-all duration-300 hover:bg-white/5 {cardBorderStyles[project.color]}"
				>
					<!-- Badge -->
					<span
						class="inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide {badgeStyles[project.color]}"
					>
						<i class="ti {project.icon}" aria-hidden="true"></i>
						{project.badge}
					</span>

					<!-- Logo -->
					<div class="mt-6 flex h-24 items-center justify-center">
						<img
							src={project.logo}
							alt="{project.title} logo"
							class="h-full w-auto max-w-60 object-contain"
						/>
					</div>

					<!-- Title -->
					<p class="mt-5 text-xl font-semibold text-white">{project.title}</p>

					<!-- Tagline -->
					<p class="mt-3 text-sm leading-7 text-slate-300">{project.tagline}</p>

					<!-- Divider -->
					<div class="my-6 border-t {dividerStyles[project.color]}"></div>

					<!-- Role -->
					<p class="text-xs font-semibold uppercase tracking-[0.15em] {roleLabelStyles[project.color]}">
						{project.roleLabel}
					</p>
					<p class="mt-2 flex-1 text-sm leading-7 text-slate-400">{project.roleText}</p>

					<!-- Link -->
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						class="mt-6 inline-flex items-center gap-1.5 text-sm font-medium no-underline transition-colors
							{project.color === 'cyan'
							? 'text-sky-300 hover:text-sky-200'
							: project.color === 'purple'
								? 'text-purple-300 hover:text-purple-200'
								: project.color === 'red'
									? 'text-[#df2f2f] hover:text-[#e85555]'
									: 'text-emerald-300 hover:text-emerald-200'}"
					>
						View Project
						<i class="ti ti-arrow-up-right text-base" aria-hidden="true"></i>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
