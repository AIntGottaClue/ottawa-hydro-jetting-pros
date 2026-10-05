import { defineConfig } from 'astro/config';

// Real domain by default. The GitHub Pages workflow sets BASE=/ottawa-hydro-jetting-pros for the preview.
export default defineConfig({
  site: 'https://ottawahydrojetting.prosapp.site',
  base: process.env.BASE ?? '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
