// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://strefazmian-poznan.pl',
  vite: { plugins: [tailwindcss()] },
});
