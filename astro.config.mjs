import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Joel Löf',
			social: {
				github: 'https://github.com/jadujoel',
				linkedin: 'https://www.linkedin.com/in/jadujoel/',
			},
			sidebar: [
				{
					label: 'Projects',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Sidechain Compressor', link: '/sidechain-compressor/' },
						{ label: 'Monster', link: '/monster/' },
						{ label: 'Compressor Plugin', link: '/compressor-plugin/' },
						{ label: 'Music Source Separation', link: '/music-source-separation/' },
						{ label: 'Snake', link: '/snake/' },
						{ label: 'Codec Support Test', link: '/codec-support-test/' },
					],
				},
			],
		}),
	],
});
