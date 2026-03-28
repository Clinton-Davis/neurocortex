

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.B91cxI-u.js","_app/immutable/chunks/D857fcg7.js","_app/immutable/chunks/CFKVnMbq.js","_app/immutable/chunks/BHdqNCAa.js"];
export const stylesheets = [];
export const fonts = [];
