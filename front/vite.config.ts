import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default ({ mode }: any) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    plugins: [
      vue({
        template: { transformAssetUrls }
      }),
      quasar({
        autoImportComponentCase: 'kebab',
        sassVariables: 'src/quasar-variables.sass'
      }),
      eslintPlugin()
    ],
    server: {
      port: Number(process.env.VITE_APP_PORT)
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}
