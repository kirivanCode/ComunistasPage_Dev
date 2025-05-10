// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import clerk from "@clerk/astro";
import { dark } from '@clerk/themes';


import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',

  integrations: [clerk({
    appearance:{
      baseTheme: dark,
    }
  }), mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: node({ mode: 'standalone' }),
  output: 'server',

  
});