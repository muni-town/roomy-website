<script lang="ts">
	let { class: className = '' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class={className}>
	<path fill="none" d="M0 0h256v256H0z" />
	<circle
		cx="128"
		cy="128"
		r="40"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="24"
	/>
	<path
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="24"
		d="M184 208c-15.21 10.11-36.37 16-56 16a96 96 0 1 1 96-96c0 22.09-8 40-28 40s-28-17.91-28-40V88"
	/>
</svg>
