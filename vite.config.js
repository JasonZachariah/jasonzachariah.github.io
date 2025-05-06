import { defineConfig } from 'vite'
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        octobud: './octobud.html', 
        handbook: './handbook.html', 
      }
    },
    outDir: 'dist', 
  }
});
