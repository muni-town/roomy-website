<script lang="ts">
	let { children } = $props();
</script>

<article class="social-grid grid grid-cols-3 gap-5">
	{@render children()}
</article>
