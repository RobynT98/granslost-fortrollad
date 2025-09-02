// astro.config.mjs
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'astro/config';
export default defineConfig({
  // *** VIKTIGT: ändra till din riktiga URL ***
  site: 'https://granslost-fortrollad.vercel.app',

  integrations: [
    mdx(),
    sitemap({
      i18n: { defaultLocale: 'sv' }
    }),
  ],
  vite: {
    plugins: [
      VitePWA({
        // gör att registreringen sköts automatiskt
        registerType: 'autoUpdate',
        // generera en service worker (så PWABuilder slutar klaga)
        strategies: 'generateSW',
        // se till att filnamnet blir som vi länkar till
        manifestFilename: 'manifest.webmanifest',
        // plocka upp extra filer i /public
        includeAssets: [
          'favicon.ico',
          'icon-192.png',
          'icon-512.png'
        ],
        // lite bredare caching så offlineläge funkar direkt
        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,png,ico,webp,woff,woff2}']
        },
        manifest: {
          name: 'Gränslöst Förtrollad',
          short_name: 'GF Blogg',          // >= 3 tecken (PWABuilder-krav)
          description: 'Personligt, vardag & mörkare djup. GF som PWA-blogg.',
          id: '/',                         // id måste vara en icke-tom sträng
          scope: '/',
          start_url: '/',
          display: 'standalone',
          background_color: '#0b0c0e',
          theme_color: '#8B0000',
          lang: 'sv-SE',
          dir: 'ltr',
          launch_handler: {                 // PWABuilder hint
            client_mode: 'navigate-existing'
          },
          categories: ['blog', 'lifestyle'],
          icons: [
            {
              src: '/icon-192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any maskable'
            },
            {
              src: '/icon-512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
            }
          ],
          // valfritt men bra för “Add to home screen”-UI
          screenshots: [
            // lägg eventuellt in riktiga skärmdumpar senare
            // {"src":"/og-banner.png","sizes":"1200x630","type":"image/png","form_factor":"wide"}
          ]
        },
        devOptions: { enabled: true }
      })
    ]
  }
});
