import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/karate_admin/',
  server: {
    port: 5174,
    host: true
  }
})
