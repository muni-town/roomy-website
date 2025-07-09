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

<main class="bg-roomy-purple min-h-screen text-white">
	<div class="mx-auto max-w-6xl px-5 py-10">
		<Navigation />
		<Hero />
		<ContentPreview />
		<Features />
		<SocialIntegration />
		<BlueskyConnection />
	</div>
</main>
