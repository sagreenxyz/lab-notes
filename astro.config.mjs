import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://sagreenxyz.github.io',
  base: '/lab-notes',
  integrations: [tailwind()],
});
