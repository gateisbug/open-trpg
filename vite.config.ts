// noinspection JSUnusedGlobalSymbols

import { resolve } from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

const p = (src: string) => resolve(__dirname, src)

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@src', replacement: p('./src') },
      { find: '@app', replacement: p('./src/app') },
      { find: '@assets', replacement: p('./src/assets') },
      { find: '@components', replacement: p('./src/components') },
      { find: '@util', replacement: p('./src/util') },
      { find: '@views', replacement: p('./src/views') },
      { find: '@parakeet', replacement: p('./xlib/parakeet') },
    ],
  },
  build: {
    cssTarget: 'chrome58',
    minify: true,
    cssMinify: true,
  },
})
