import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://mashfy.github.io/Mashfy/ on GitHub Pages.
export default defineConfig({
  base: '/Mashfy/',
  plugins: [react()],
});
