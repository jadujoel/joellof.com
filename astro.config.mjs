import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import esbuild from 'esbuild';

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
      plugins: [
        {
          name: 'ts-builder',
          hooks: {
            setup: async () => {
              await esbuild.build({
                entryPoints: ['src/scripts/sounds.ts'],
                bundle: true,
                outfile: 'public/scripts/sounds.js',
                format: 'esm',
                platform: 'browser',
                minify: true,
              })
            },
          }
        }
      ],
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
						{ label: 'Util - Scode', link: '/scode/' },
					],
				},
			],
      head: [
        // add sounds script to all pages
        {
          tag: 'script',
          attrs: {
            src: '/scripts/sounds.js',
            defer: true,
            type: 'module',
          },
        }
      ]
		}),
	],
});
