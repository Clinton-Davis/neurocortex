<script>
	import '../app.css';
	import SiteFooter from '$lib/components/layout/SiteFooter.svelte';
	import SiteHeader from '$lib/components/layout/SiteHeader.svelte';
</script>

<SiteHeader />

<main>
	<slot />
</main>

<SiteFooter />
