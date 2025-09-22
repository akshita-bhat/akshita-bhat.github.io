import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // IMPORTANT for GitHub Pages when deploying to a subpath:
  base: '/akshita-bhat.github.io/',
})
