import { join } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import postCssPxToRem from 'postcss-plugin-px2rem'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss()],
  resolve: {
    alias: {
      '~': join(__dirname, 'src'),
    },
  },
  css: {
    postcss: {
      plugins: [postCssPxToRem({
        rootValue: 151.2, // 1rem的大小
        exclude: /(node_module)/,
        mediaQuery: false,
        propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
      })],
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/v1/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
