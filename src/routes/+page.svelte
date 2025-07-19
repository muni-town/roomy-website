<script lang="ts">
	import {
		BlueskyConnection,
		ContentPreview,
		Features,
		Hero,
		Navigation,
		SocialIntegration
	} from '$lib/components/templates/landing';
</script>

<main class="relative min-h-screen overflow-x-hidden text-white">
	<figure class="absolute -top-32 -right-32 -z-10 h-[840px] w-[840px]">
		<img alt="" src="/images/e6h.png" class="opacity-60" />
	</figure>
	<Navigation />
	<Hero />
	<ContentPreview />
	<Features />
	<SocialIntegration />
	<BlueskyConnection />
</main>
