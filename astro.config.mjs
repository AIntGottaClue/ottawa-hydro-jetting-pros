import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://ottawahydrojetting.prosapp.site',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
