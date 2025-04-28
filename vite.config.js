import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',       //

        //project pages
        project1: 'octobud.html',
        project2: 'fitfam.html',
        project3: 'handbook.html'
      }
    }
  }
})
