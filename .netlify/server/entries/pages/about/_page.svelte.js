import { T as escape_html, i as head, r as ensure_array_like, t as attr_class, w as clsx } from "../../../chunks/server.js";
//#region src/routes/about/about-content.ts
var aboutContent = {
	hero: {
		headline: "NeuroCortex",
		intro: ["NeuroCortex Ltd is an Irish technology company focused on building intelligent systems that enhance how humans think, learn, and make decisions.", "We operate at the intersection of artificial intelligence, software engineering, and human cognitive development."],
		goal: "Where human intelligence meets intelligent systems."
	},
	mission: {
		title: "Our Mission",
		paragraphs: [
			"Our mission is to design intelligent systems that strengthen the relationship between human intelligence and technology.",
			"We believe the most powerful technology is not technology that replaces humans, or removes them from the process, but technology that works in partnership with human insight, creativity, judgment, and awareness.",
			"At NeuroCortex, we are interested in the synergy between the two:"
		],
		bullets: [
			"Human intuition and machine capability",
			"Reflection and analysis",
			"Creativity and Computation",
			"Wisdom and Intelligence",
			"Human direction and Technological support"
		],
		closing: [
			"Artificial intelligence should not be used simply to automate tasks for the sake of efficiency.",
			"It should be used to support deeper thinking, clearer decision making, greater self-awareness, and more meaningful progress.",
			"Our goal is to build systems where human intelligence remains central, while technology extends what is possible."
		]
	},
	values: {
		title: "What NeuroCortex Stands For",
		brainIntro: "The name NeuroCortex refers to the part of the brain responsible for higher thinking.",
		brainAbilities: [
			"Reason",
			"Planning",
			"Creativity",
			"Self-awareness",
			"Decision making"
		],
		intelligenceStatement: "These abilities represent the highest forms of human intelligence.",
		focusParagraph: "At NeuroCortex, our work focuses on building systems that support and extend these capabilities rather than replace them.",
		philosophyParagraph: "Many technology companies focus only on automation and efficiency. While those things matter, we believe the real potential of technology lies in strengthening the relationship between human intelligence and intelligent systems.",
		technologySupportsIntro: "Technology should help people:",
		technologySupports: [
			"think more clearly",
			"reflect more deeply",
			"learn more effectively",
			"make better decisions",
			"understand themselves better"
		],
		philosophyClosing: "This philosophy shapes both the systems we build and the problems we choose to work on.",
		engineerIntro: "NeuroCortex develops advanced software systems including:",
		engineerSystems: [
			"AI powered platforms",
			"intelligent data systems",
			"LLM based applications",
			"reflective AI tools",
			"analytics and decision support systems"
		],
		engineerApproachIntro: "Our engineering approach emphasizes:",
		engineerApproach: [
			"clarity",
			"scalability",
			"long term thinking",
			"practical real world systems"
		],
		humanBridge: [
			"But technology alone is not enough.",
			"Real progress happens when technological capability and human awareness evolve together.",
			"Through the work of founder Clinton Davis, NeuroCortex also explores how systems can support personal insight, reflection, and transformation. This perspective influences projects like DeepJournal, an AI reflection platform designed to help individuals understand their thinking patterns and grow through structured reflection."
		],
		futureStatements: [
			"The future of artificial intelligence is not simply automation.",
			"It is intelligence augmentation.",
			"Technology should not replace human thinking.",
			"It should expand what human intelligence is capable of."
		]
	},
	founder: {
		title: "Founder",
		name: "Clinton Davis",
		role: "Founder, NeuroCortex Ltd",
		paragraphs: [
			"Clinton Davis is a software engineer, AI systems architect, and transformation coach with of experience across technology and personal development.",
			"His career spans software engineering, entrepreneurship, and human development, combining technical knowledge with a passion for understanding how people think, feel, and grow.",
			"Through NeuroCortex, Clinton brings these two worlds together: building intelligent systems while also supporting the development of human intelligence."
		]
	},
	closing: {
		title: "NeuroCortex exists for one reason",
		goal: "To build technology that helps humans think better.",
		paragraphs: [
			"As humanity grows as an intelligent species, the technologies we create will grow with us.",
			"Not as replacements for human intelligence, but as partners to it.",
			"Separate from us, yet working alongside us to expand what human intelligence is capable of.",
			"That is the future NeuroCortex is building toward."
		]
	}
};
//#endregion
//#region src/routes/about/AboutHero.svelte
function AboutHero($$renderer) {
	const { hero } = aboutContent;
	$$renderer.push(`<section class="about-section px-6 pt-20 pb-8 lg:px-8 lg:pt-28"><div class="about-container"><div class="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20"><div><p class="about-kicker">NeuroCortex Ltd</p> <h1 class="mt-6 max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">${escape_html(hero.headline)}</h1> <div class="mt-8 max-w-2xl space-y-5"><!--[-->`);
	const each_array = ensure_array_like(hero.intro);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let paragraph = each_array[$$index];
		$$renderer.push(`<p class="text-base leading-8 text-slate-300 sm:text-lg">${escape_html(paragraph)}</p>`);
	}
	$$renderer.push(`<!--]--></div> <p class="mt-9 max-w-2xl border-l border-sky-400/40 pl-5 text-xl font-semibold tracking-tight text-slate-100 sm:text-2xl">${escape_html(hero.goal)}</p></div> <div class="relative mx-auto w-full max-w-xl lg:mx-0"><div class="relative aspect-square overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900/60 shadow-[0_0_90px_-28px_rgba(56,189,248,0.36)] backdrop-blur-sm"><div class="absolute inset-0 bg-[radial-gradient(circle_at_34%_32%,rgba(56,189,248,0.24),transparent_44%),radial-gradient(circle_at_69%_67%,rgba(99,102,241,0.24),transparent_52%),linear-gradient(140deg,rgba(15,23,42,0.95),rgba(2,6,23,0.88))]"></div> <div class="absolute inset-0 flex items-center justify-center p-10 sm:p-12"><img src="/NeuroCortextLogoRoundedFavicon.svg" alt="NeuroCortex logo" class="h-full w-full max-h-[21rem] max-w-[21rem] object-contain opacity-95 drop-shadow-[0_0_40px_rgba(56,189,248,0.28)]" loading="lazy"/></div></div></div></div></div></section>`);
}
//#endregion
//#region src/routes/about/ClosingSection.svelte
function ClosingSection($$renderer) {
	const { closing } = aboutContent;
	$$renderer.push(`<section class="about-section px-6 pt-16 pb-24 lg:px-8 lg:pt-24 lg:pb-32"><div class="about-container"><div class="relative mx-auto max-w-4xl text-center"><div aria-hidden="true" class="pointer-events-none absolute left-1/2 top-3 -z-10 h-36 w-36 -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl"></div> <h2 class="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">${escape_html(closing.title)}</h2> <p class="mx-auto mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">${escape_html(closing.goal)}</p> <div class="mx-auto mt-5 max-w-2xl space-y-2"><!--[-->`);
	const each_array = ensure_array_like(closing.paragraphs);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let paragraph = each_array[$$index];
		$$renderer.push(`<p class="text-base text-slate-300">${escape_html(paragraph)}</p>`);
	}
	$$renderer.push(`<!--]--></div></div></div></section>`);
}
//#endregion
//#region src/routes/about/FounderSection.svelte
function FounderSection($$renderer) {
	const { founder } = aboutContent;
	$$renderer.push(`<section class="about-section px-6 py-14 lg:px-8 lg:py-20"><div class="about-container"><div class="grid gap-10 border-t border-slate-800/85 pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16"><div><p class="about-kicker">${escape_html(founder.title)}</p> <h2 class="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">${escape_html(founder.name)}</h2> <div class="mt-6 flex flex-wrap gap-3"><span class="rounded-full border border-slate-700/80 bg-slate-900/65 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-slate-200">Founder</span> <span class="rounded-full border border-sky-500/35 bg-sky-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-sky-200">NeuroCortex Ltd</span></div> <p class="mt-6 max-w-md text-sm leading-7 text-slate-400">${escape_html(founder.role)}</p></div> <div class="max-w-3xl space-y-5"><!--[-->`);
	const each_array = ensure_array_like(founder.paragraphs);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let paragraph = each_array[$$index];
		$$renderer.push(`<p class="text-base leading-8 text-slate-300">${escape_html(paragraph)}</p>`);
	}
	$$renderer.push(`<!--]--></div></div></div></section>`);
}
//#endregion
//#region src/routes/about/MissionSection.svelte
function MissionSection($$renderer) {
	const { mission } = aboutContent;
	const missionPairings = mission.bullets.map((bullet) => {
		const [left, right] = bullet.split(" and ");
		return {
			left: left?.trim() ?? bullet,
			right: right?.trim() ?? ""
		};
	});
	$$renderer.push(`<section class="about-section px-6 py-14 lg:px-8 lg:py-20"><div class="about-container"><div class="grid gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:gap-16"><div><h2 class="about-subheading">${escape_html(mission.title)}</h2> <div class="mt-7 max-w-3xl space-y-5"><!--[-->`);
	const each_array = ensure_array_like(mission.paragraphs);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let paragraph = each_array[$$index];
		$$renderer.push(`<p class="text-base leading-8 text-slate-300">${escape_html(paragraph)}</p>`);
	}
	$$renderer.push(`<!--]--></div> <div class="mt-8 max-w-3xl space-y-5"><!--[-->`);
	const each_array_1 = ensure_array_like(mission.closing);
	for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
		let paragraph = each_array_1[$$index_1];
		$$renderer.push(`<p class="text-base leading-8 text-slate-300">${escape_html(paragraph)}</p>`);
	}
	$$renderer.push(`<!--]--></div></div> <div class="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/55 p-7 shadow-[0_0_65px_-32px_rgba(99,102,241,0.6)] backdrop-blur-sm sm:p-8"><div aria-hidden="true" class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(56,189,248,0.22),transparent_42%),radial-gradient(circle_at_84%_82%,rgba(129,140,248,0.2),transparent_48%)]"></div> <p class="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Core Synergies</p> <ul class="mt-6 space-y-4"><!--[-->`);
	const each_array_2 = ensure_array_like(missionPairings);
	for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
		let pairing = each_array_2[$$index_2];
		$$renderer.push(`<li class="rounded-2xl border border-slate-800/70 bg-slate-950/55 px-4 py-4"><p class="text-sm leading-6 text-slate-300"><span class="font-medium text-slate-100">${escape_html(pairing.left)}</span> `);
		if (pairing.right) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<span class="mx-2 text-sky-300/80">/</span> <span>${escape_html(pairing.right)}</span>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></p></li>`);
	}
	$$renderer.push(`<!--]--></ul></div></div></div></section>`);
}
//#endregion
//#region src/routes/about/ValuesSection.svelte
function ValuesSection($$renderer) {
	const { values } = aboutContent;
	$$renderer.push(`<section class="about-section px-6 py-14 lg:px-8 lg:py-20"><div class="about-container"><div class="max-w-3xl"><p class="about-kicker">Principles</p> <h2 class="about-subheading mt-4">${escape_html(values.title)}</h2></div> <div class="mt-10 grid gap-6 lg:grid-cols-2"><section class="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/55 p-7 sm:p-8"><div aria-hidden="true" class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(56,189,248,0.2),transparent_42%)]"></div> <h3 class="text-2xl font-semibold tracking-tight text-white">Higher Thinking</h3> <p class="mt-5 text-base leading-8 text-slate-300">${escape_html(values.brainIntro)}</p> <ul class="mt-5 space-y-2 text-sm leading-6 text-slate-300"><!--[-->`);
	const each_array = ensure_array_like(values.brainAbilities);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let ability = each_array[$$index];
		$$renderer.push(`<li class="flex items-start gap-2"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300/80"></span> <span>${escape_html(ability)}</span></li>`);
	}
	$$renderer.push(`<!--]--></ul> <p class="mt-5 text-sm leading-6 text-slate-300">${escape_html(values.intelligenceStatement)}</p> <p class="mt-4 text-sm leading-6 text-slate-300">${escape_html(values.focusParagraph)}</p> <p class="mt-4 text-sm leading-6 text-slate-300">${escape_html(values.technologySupportsIntro)}</p> <ul class="mt-4 space-y-2 text-sm leading-6 text-slate-300"><!--[-->`);
	const each_array_1 = ensure_array_like(values.technologySupports);
	for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
		let support = each_array_1[$$index_1];
		$$renderer.push(`<li class="flex items-start gap-2"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/80"></span> <span>${escape_html(support)}</span></li>`);
	}
	$$renderer.push(`<!--]--></ul></section> <section class="rounded-3xl border border-slate-800/80 bg-slate-900/55 p-7 sm:p-8"><h3 class="text-2xl font-semibold tracking-tight text-white">Human Development</h3> <p class="mt-5 text-base leading-8 text-slate-300">${escape_html(values.philosophyParagraph)}</p> <p class="mt-4 text-sm leading-7 text-slate-300">${escape_html(values.philosophyClosing)}</p> <div class="mt-6 space-y-3 border-l border-slate-700/80 pl-4"><!--[-->`);
	const each_array_2 = ensure_array_like(values.humanBridge.slice(0, 2));
	for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
		let paragraph = each_array_2[$$index_2];
		$$renderer.push(`<p class="text-sm leading-6 text-slate-300">${escape_html(paragraph)}</p>`);
	}
	$$renderer.push(`<!--]--></div> <div class="mt-7 space-y-2"><!--[-->`);
	const each_array_3 = ensure_array_like(values.futureStatements);
	for (let i = 0, $$length = each_array_3.length; i < $$length; i++) {
		let statement = each_array_3[i];
		$$renderer.push(`<p${attr_class(clsx(i % 2 === 1 ? "text-base font-semibold tracking-tight text-slate-100" : "text-sm leading-6 text-slate-300"))}>${escape_html(statement)}</p>`);
	}
	$$renderer.push(`<!--]--></div></section></div></div></section>`);
}
//#endregion
//#region src/routes/about/+page.svelte
function _page($$renderer) {
	head("cwls5q", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>About NeuroCortex | AI, Software, Human Intelligence</title>`);
		});
		$$renderer.push(`<meta name="description" content="Learn about NeuroCortex Ltd, our mission, values, and approach to building technology that helps humans think better."/>`);
	});
	$$renderer.push(`<div class="relative isolate overflow-hidden bg-slate-950"><div aria-hidden="true" class="pointer-events-none absolute inset-x-0 -top-56 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"><div style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" class="aspect-1108/632 w-312 flex-none bg-linear-to-r from-sky-400/25 via-indigo-500/20 to-violet-500/25 opacity-45"></div></div> <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_14%,rgba(56,189,248,0.16),transparent_38%),radial-gradient(circle_at_82%_22%,rgba(99,102,241,0.16),transparent_32%),radial-gradient(circle_at_50%_74%,rgba(14,116,144,0.14),transparent_44%)]"></div> <main class="relative">`);
	AboutHero($$renderer, {});
	$$renderer.push(`<!----> `);
	MissionSection($$renderer, {});
	$$renderer.push(`<!----> `);
	ValuesSection($$renderer, {});
	$$renderer.push(`<!----> `);
	FounderSection($$renderer, {});
	$$renderer.push(`<!----> `);
	ClosingSection($$renderer, {});
	$$renderer.push(`<!----></main> <div aria-hidden="true" class="pointer-events-none absolute inset-x-0 -bottom-40 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"><div style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" class="aspect-1318/752 w-336 flex-none bg-linear-to-r from-sky-500/20 via-indigo-500/20 to-violet-500/25 opacity-35"></div></div></div>`);
}
//#endregion
export { _page as default };
