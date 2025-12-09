import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/frontendmentor_card/",
  plugins: [
    tailwindcss(),
  ],
})
