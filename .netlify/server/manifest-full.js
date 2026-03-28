export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["NeuroCortextLogoRoundedFavicon.svg","NeuroCortextNewLogoRounded.png","nc-logo.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BZb-n1yq.js",app:"_app/immutable/entry/app.C3WK8YvA.js",imports:["_app/immutable/entry/start.BZb-n1yq.js","_app/immutable/chunks/D857fcg7.js","_app/immutable/chunks/BVj5Syxl.js","_app/immutable/entry/app.C3WK8YvA.js","_app/immutable/chunks/D857fcg7.js","_app/immutable/chunks/BgUy-a58.js","_app/immutable/chunks/CFKVnMbq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/contact",
				pattern: /^\/api\/contact\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/contact/_server.ts.js'))
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
