import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 🚨 ADD THIS LINE to fix asset loading on GitHub Pages
  base: '/My-Portfolio/', 
  plugins: [react()],
})
