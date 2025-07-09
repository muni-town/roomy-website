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

<main class="min-h-screen overflow-x-hidden text-white">
	<Navigation />
	<Hero />
	<ContentPreview />
	<Features />
	<SocialIntegration />
	<BlueskyConnection />
</main>
