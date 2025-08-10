<script lang="ts">
	import { At, Bluesky, Discord, GitHub, Google, Mastodon } from '$lib/components/atoms/icons';
	import SocialBlock from '$lib/components/atoms/SocialBlock.svelte';
	import SocialGrid from '$lib/components/molecules/SocialGrid.svelte';
</script>

<section
	class="section-wrapper mb-20 flex flex-col items-center justify-between gap-8 md:max-w-6xl lg:flex-row"
>
	<div class="mb-10 w-11/12 text-center lg:w-[500px]">
		<h2 class="mb-5 text-3xl leading-tight font-bold">Bring your own ID</h2>
		<p class="leading-relaxed opacity-90">
			Login with Bluesky (default), Mastodon, GitHub... Also extend your existing social
			profile with Roomy.
			<a href="#" class="text-purple-300 underline transition-colors hover:text-purple-200"
				>Netizens</a
			>
		</p>
	</div>
	<SocialGrid>
		<SocialBlock>
			<Discord class="h-16 w-16" />
		</SocialBlock>
		<SocialBlock>
			<Mastodon class="h-16 w-16" />
		</SocialBlock>
		<SocialBlock>
			<GitHub class="h-16 w-16" />
		</SocialBlock>
		<SocialBlock>
			<Bluesky class="h-16 w-16" />
		</SocialBlock>
		<SocialBlock>
			<Google class="h-16 w-16" />
		</SocialBlock>
		<SocialBlock>
			<At class="h-16 w-16" />
		</SocialBlock>
	</SocialGrid>
</section>
