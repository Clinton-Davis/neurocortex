import { T as escape_html, o as slot } from "../../chunks/server.js";
//#region src/lib/components/layout/SiteFooter.svelte
function SiteFooter($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
		$$renderer.push(`<footer class="border-t border-slate-800 bg-slate-950"><div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8"><nav aria-label="Footer" class="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"><a href="/about" class="text-slate-400 hover:text-white">About</a> <a href="/projects" class="text-slate-400 hover:text-white">Projects</a> <a href="/contact" class="text-slate-400 hover:text-white">Contact</a></nav> <div class="mt-8 border-t border-gray-900/10 pt-8 dark:border-white/10"><p class="flex items-center justify-center gap-2 text-sm text-gray-200 dark:text-gray-400"><img class="cd_icon icons spinning h-10 w-auto svelte-1c5q26z" src="/NeuroCortextLogoRoundedFavicon.svg" alt="Digital-Web-Solutions spinning icon"/> <span>${escape_html(currentYear)}</span> <span>Neurocortex Ltd</span> © <span>| All Rights Reserved.</span></p></div></div></footer>`);
	});
}
//#endregion
//#region src/lib/components/layout/SiteHeader.svelte
function SiteHeader($$renderer) {
	$$renderer.push(`<div class="bg-slate-950 border-b border-slate-800"><header><nav aria-label="Global" class="relative mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-12"><div class="flex lg:hidden"><a href="/" class="-m-1.5 p-1.5"><span class="sr-only">NeuroCortex Ltd</span> <img src="/NeuroCortextLogoRoundedFavicon.svg" alt="NeuroCortex Ltd logo" class="h-8 w-auto"/></a></div> <div class="flex lg:hidden"><button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-200"><span class="sr-only">Open main menu</span> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6"><path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div> <div class="hidden lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2 lg:items-center lg:gap-x-10"><a href="/" class="-m-1.5 p-1.5"><span class="sr-only">NeuroCortex Ltd</span> <img src="/NeuroCortextLogoRoundedFavicon.svg" alt="" class="h-8 w-auto"/></a> <a href="/about" class="text-sm/6 font-semibold text-slate-200 hover:text-white">About</a> <a href="/projects" class="text-sm/6 font-semibold text-slate-200 hover:text-white">Projects</a> <a href="/contact" class="text-sm/6 font-semibold text-slate-200 hover:text-white">Contact</a></div></nav> `);
	$$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--></header></div>`);
}
//#endregion
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	SiteHeader($$renderer, {});
	$$renderer.push(`<!----> <main><!--[-->`);
	slot($$renderer, $$props, "default", {}, null);
	$$renderer.push(`<!--]--></main> `);
	SiteFooter($$renderer, {});
	$$renderer.push(`<!---->`);
}
//#endregion
export { _layout as default };
