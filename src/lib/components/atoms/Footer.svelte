<script>
	import { CONFIG } from '$lib/config';
</script>

<footer class="w-full">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-10 pb-10 lg:px-0">
		{#each CONFIG.footer.links as { title, items } (title)}
			<article>
				<h3 class="py-4 font-semibold">{title}</h3>
				<ul class="space-y-2 text-sm">
					{#each items as { label, url } (url)}
						<li class="hover:cursor-pointer hover:underline">
							<a href={url} target="_blank">
								{label}
							</a>
						</li>
					{/each}
				</ul>
			</article>
		{/each}
	</div>
</footer>
