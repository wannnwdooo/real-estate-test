import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginVueTypeImports from '@rah-emil/vite-plugin-vue-type-imports'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePluginVueTypeImports()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/css/media.scss";'
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
