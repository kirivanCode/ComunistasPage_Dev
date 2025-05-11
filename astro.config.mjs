// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import clerk from "@clerk/astro";
import { esES } from '@clerk/localizations';
import { dark } from '@clerk/themes';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://example.com',

  integrations: [
    clerk({
      localization: esES,
      appearance: {
        baseTheme: dark,
      },
    }),
    mdx(),
    sitemap()
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
  output: 'server', // para SSR, puede omitirse si netlify lo establece automáticamente
});
