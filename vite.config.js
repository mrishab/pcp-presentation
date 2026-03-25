import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public',
  publicDir: 'slides',
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'public/index.html'),
    },
  },
  server: {
    fs: {
      allow: [resolve(__dirname, 'src')],
    },
  },
});
