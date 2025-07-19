const SITE_URL = 'https://a.roomy.space';

export const CONFIG = {
	meta: {
		description:
			'Make communities that can, if necessary, endure purely on the shared resources of sufficiently aligned peers in a mutual-sharing network.',
		title: 'Roomy | Make ✱ Space',
		url: SITE_URL,
		image: `${SITE_URL}/images/social.png`
	},
	footer: {
		links: [
			{
				title: 'Social',
				items: [
					{ label: 'Weird', url: 'https://muni.town' },
					{ label: 'Discord', url: 'https://discord.gg/BkEpMzzh38' },
					{ label: 'GitHub', url: 'https://github.com/muni-town' },
					{ label: 'Matrix', url: 'https://matrix.to/#/%23muni-town:commune.sh' }
				]
			},
			{
				title: 'Blog',
				items: [
					{ label: 'Muni Town Blog', url: 'https://muni.town/blog' },
					{
						label: 'Roomy .space (alpha-4)',
						url: 'https://blog.muni.town/roomy-space-alpha4/'
					}
				]
			}
		]
	}
};
