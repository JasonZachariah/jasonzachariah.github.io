import { defineConfig } from 'vite'
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname,'index.html' ) ,     //

        //project pages
        project1: resolve(__dirname,'octobud.html'),
        project2: resolve(__dirname,'fitfam.html'),
        project3:resolve(__dirname, 'handbook.html')
      }
    }
  }
})
