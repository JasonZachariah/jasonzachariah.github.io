
import { resolve } from 'path';
import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        about:'./about.html',
        main: './index.html',
        octobud: './octobud.html', 
        handbook: './handbook.html', 
        error:'./404.html',
        wip:'./wip.html',
        wizedos:'./wizedos.html',
        wizparser:'./wizParser.html',
      }
    },
    outDir: 'dist', 
  }
});
