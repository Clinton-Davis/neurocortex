import { i as head } from "../../../chunks/server.js";
//#region src/routes/projects/+page.svelte
function _page($$renderer) {
	head("rqn88j", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Projects | NeuroCortex Ltd</title>`);
		});
	});
	$$renderer.push(`<section class="relative isolate overflow-hidden"><div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(56,189,248,0.17),transparent_34%),radial-gradient(circle_at_78%_24%,rgba(99,102,241,0.17),transparent_30%),radial-gradient(circle_at_50%_78%,rgba(14,116,144,0.15),transparent_44%)]"></div> <div class="page-shell min-h-[90vh] py-24 sm:py-28"><div class="mx-auto max-w-3xl rounded-4xl border border-slate-800/80 bg-slate-900/55 p-8 text-center shadow-[0_0_85px_-34px_rgba(56,189,248,0.42)] backdrop-blur-sm sm:p-12"><p class="text-xs font-semibold uppercase tracking-[0.14em] text-sky-300">Projects</p> <h1 class="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Under Construction</h1> <p class="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">Delivery details are currently being prepared.</p> <p class="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-400">We are curating project insights that reflect the depth of NeuroCortex engineering and applied AI work.</p></div></div></section>`);
}
//#endregion
export { _page as default };
