import { transformAssetUrls } from '@quasar/vite-plugin'
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [
    Vue({
      template: { transformAssetUrls }
    })
  ],
  test: {
    testTimeout: 20000,
    globals: true,
    environment: 'jsdom',
    reporters: ['verbose'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**'
    ],
    env: { VITE_URL_BASE_ENDPOINT: 'http://api-justicia-test.oj.gob.bo/api/v1/' },
    setupFiles: './src/setupTests.ts',
    coverage: {
      include: ['src/**/*'],
      exclude: [
        'src/main.ts',
        'src/plugins/',
        'src/App.vue',
        'src/shims-vue.d.ts',
        'src/router/*',
        'src/stores/*',
        'src/types/*',
        'src/components/icons/*'
      ],
      reporter: ['text', 'json', 'html'],
      all: true,
      lines: 60,
      functions: 60,
      branches: 60,
      statements: 60
    }
  },
  envDir: '.env',
  root: '.', //Define the root
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
