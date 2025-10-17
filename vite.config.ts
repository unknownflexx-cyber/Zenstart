import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Zenstart/',   // 👈 project repo name
  plugins: [react()],
})
