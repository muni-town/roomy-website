<script lang="ts">
	import { CONFIG } from '$lib/config';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Roomy | Make ✱ Space</title>
	<meta name="description" content={CONFIG.meta.description} />
	<link rel="canonical" href={CONFIG.meta.url} />

	<!-- Open Graph Tags -->
	<meta property="og:title" content={CONFIG.meta.title} />
	<meta property="og:description" content={CONFIG.meta.description} />
	<meta property="og:image" content={CONFIG.meta.image} />
	<meta property="og:url" content={CONFIG.meta.url} />
	<meta property="og:type" content="website" />

	<!-- Twitter Card Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={CONFIG.meta.title} />
	<meta name="twitter:description" content={CONFIG.meta.description} />
	<meta name="twitter:image" content={CONFIG.meta.image} />

	<!-- Meta Tags -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta charset="UTF-8" />
</svelte:head>

{@render children()}
