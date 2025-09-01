# 🌙 Gränslöst Förtrollad 

<p align="center">
  <img src="https://granslost-fortrollad.vercel.app/og-banner.png" alt="Gränslöst Förtrollad – En PWA-blogg" width="800">
</p>

[![Astro](https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](src/pages/licens.mdx)

En personlig **PWA-blogg** byggd med [Astro](https://astro.build).  
Här blandas vardag, personligt skrivande, nörderi och djupare teman.  

## ✨ Funktioner

- 📱 **PWA-stöd** (installera som app)  
- 📝 Markdown & MDX för inlägg  
- 🖼 SEO + Open Graph (delbara länkar med bilder)  
- 🗺 Sitemap & RSS-flöde (`/rss.xml`)  
- 🎨 Enkel, utbyggbar design med egna komponenter  

## 🚀 Projektstruktur

```text
├── public/              # statiska filer (ikoner, manifest, etc.)
├── src/
│   ├── components/      # återanvändbara komponenter (Header, Footer, etc.)
│   ├── content/         # bloggposter (MD/MDX + schema)
│   ├── layouts/         # layouts för sidor & poster
│   └── pages/           # sidor (index, om, kontakt, etc.)
├── astro.config.mjs     # Astro-konfiguration
├── package.json         # npm scripts & dependencies
└── tsconfig.json        # TypeScript config
🧞 Kommandon
Kommando	Gör
npm install	Installerar beroenden
npm run dev	Startar lokalt dev-server på http://localhost:4321
npm run build	Bygger sajten till ./dist/
npm run preview	Förhandsvisar bygget lokalt

🌐 Deployment
Projektet körs på Vercel.
Live-version: granslost-fortrollad.vercel.app

📜 Licens
Koden är släppt under MIT-licensen.
Innehåll och texter © Conri Turesson.

🌙 Gränslöst Förtrollad (English)



A personal PWA blog built with Astro.
Mixing everyday reflections, personal writing, nerdy stuff, and darker themes.

✨ Features
📱 PWA support (install as an app)

📝 Markdown & MDX for blog posts

🖼 SEO + Open Graph (shareable links with preview images)

🗺 Sitemap & RSS feed (/rss.xml)

🎨 Minimal, extensible design with custom components

🚀 Project Structure
text
Kopiera kod
├── public/              # static files (icons, manifest, etc.)
├── src/
│   ├── components/      # reusable components (Header, Footer, etc.)
│   ├── content/         # blog posts (MD/MDX + schema)
│   ├── layouts/         # page & post layouts
│   └── pages/           # routes (index, about, contact, etc.)
├── astro.config.mjs     # Astro configuration
├── package.json         # npm scripts & dependencies
└── tsconfig.json        # TypeScript config
🧞 Commands
Command	Action
npm install	Installs dependencies
npm run dev	Starts local dev server at http://localhost:4321
npm run build	Build your site to ./dist/
npm run preview	Preview your build locally

🌐 Deployment
Deployed with Vercel.
Live: granslost-fortrollad.vercel.app

📜 License
Code released under the MIT license.
Content & text © Conri Turesson.
