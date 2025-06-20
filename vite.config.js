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
})