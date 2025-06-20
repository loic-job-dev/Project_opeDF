import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'pdfmake/build/pdfmake': path.resolve(__dirname, 'node_modules/pdfmake/build/pdfmake.js'),
      'pdfmake/build/vfs_fonts': path.resolve(__dirname, 'node_modules/pdfmake/build/vfs_fonts.js'),
      '@': path.resolve(__dirname, './src')
    },
  },
server: {
  proxy: {
    '/api-sirene': {
      target: 'https://api.insee.fr/api-sirene',
      changeOrigin: true,
      secure: true,
      headers: {
        'X-INSEE-Api-Key-Integration': '265f3f8e-9f3e-4fea-9f3f-8e9f3e0fea59'
      }
    }
  }
}
})