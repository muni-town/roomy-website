<script lang="ts">
	let { children } = $props();
</script>

<div
	class="social-block flex h-26 w-26 items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2 transition-colors hover:bg-white/20"
>
	<figure
		class="flex h-18 w-18 items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2 transition-colors hover:bg-white/20"
	>
		{@render children()}
	</figure>
</div>
