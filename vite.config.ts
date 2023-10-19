import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import paths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), paths()],
})
