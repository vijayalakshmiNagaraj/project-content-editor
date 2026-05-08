import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Forces Vite to check files every few milliseconds
    },
  },
  resolve: {
    alias: {
      // This maps '@components' to your actual folder
      '@core': path.resolve(__dirname, './src/Components/CoreComponents'),
      '@layout': path.resolve(__dirname, './src/Components/LayoutComponents'),
    },
  },
 
})
