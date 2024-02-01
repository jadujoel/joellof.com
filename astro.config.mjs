import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://joellof.com',
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
						{ label: 'WebAudio - Compressor', link: '/sidechain-compressor/' },
						{ label: 'VST - Monster', link: '/monster/' },
						{ label: 'VST - Compressor', link: '/compressor-plugin/' },
						{ label: 'ML - MSS', link: '/music-source-separation/' },
						{ label: 'ML - Cough', link: '/cough-classifier/' },
						{ label: 'Game - Snake', link: '/snake/' },
						{ label: 'Util - Markdown', link: '/markdown-to-jira/' },
						{ label: 'Util - Codec', link: '/codec-support-test/' },
					],
				},
			],
		}),
	],
});
