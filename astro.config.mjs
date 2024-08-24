import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import esbuild from 'esbuild';
import fs from 'fs/promises'

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
              await fs.mkdir(".cache", { recursive: true })
              const build = async (e) => {
                await esbuild.build({
                  entryPoints: ['src/scripts/sounds.ts'],
                  bundle: true,
                  outfile: 'public/scripts/sounds.js',
                  format: 'esm',
                  platform: 'browser',
                  minify: true,
                })
                const time = new Date().getTime()
                const ofile = `.cache/config${time}.js`
                await esbuild.build({
                  entryPoints: ['src/scripts/config.ts'],
                  bundle: true,
                  outfile: ofile,
                  platform: 'node',
                  minify: false,
                  format: 'esm',
                  treeShaking: true
                })
                const mod = await import(/* @vite-ignore */ ofile /* @vite-ignore */)
                const config = JSON.stringify(mod.default, null, 2)
                await fs.writeFile('public/config.json', config)
              }
              if (process.argv.includes('--watch')) {
                await build()
                const watch = async() => {
                  const watcher = fs.watch('src/scripts', { recursive: true })
                  for await (const event of watcher) {
                    await build(event).catch(console.log)
                  }
                }
                watch().catch(console.log)
              } else {
                await build()
              }
            }
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
						{ label: 'App - Podcast Master', link: '/podcast-master/' },
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
        },
      ]
		}),
	],
});
