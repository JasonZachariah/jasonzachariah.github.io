import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',       //
        project1: 'octobud.html'      
      }
    }
  }
})
