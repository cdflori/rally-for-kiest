// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Set SITE_URL in your host's environment once a domain is chosen.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://rallyforkiest.org',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
