// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.funkyevents.net',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
