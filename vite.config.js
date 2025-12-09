import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [
    react(),          // your plugins go here
    // tailwindcss()   // normally Tailwind is used via postcss, you may not need this here
  ],
  base: '/frontendmentor_card/'  // <--- base goes here, NOT inside plugins
})
