import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@product': fileURLToPath(new URL('./src/modules/product', import.meta.url)),
      '@cart': fileURLToPath(new URL('./src/modules/cart', import.meta.url)),
      '@project': fileURLToPath(new URL('./src/modules/project', import.meta.url))
    }
  },
  base:'/KataEcom/'
})
