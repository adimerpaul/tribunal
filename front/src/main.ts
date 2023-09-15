import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import quasarLang from 'quasar/lang/es'
import quasarIconSet from 'quasar/icon-set/mdi-v7'

// Import icon libraries
import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css'
import '@quasar/extras/mdi-v7/mdi-v7.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import Quasar from './config/quasar'
import { Dialog, Loading, Notify, AppFullscreen } from 'quasar'
import type { IMenus, IUsuario } from './modules/modules.types'
import GlobalStore from '@/global.store'

const { setUsuario } = GlobalStore

const app = createApp({
  beforeCreate() {
    try {
      const usuarioLocalStorage = localStorage.getItem('usuario')

      if (!usuarioLocalStorage) throw new Error('no existe token o menus')

      const { usuario, menus }: { usuario: IUsuario; menus: IMenus[] } =
        JSON.parse(usuarioLocalStorage)

      if (!usuario.refreshToken || !usuario.accessToken || !menus)
        throw new Error('no existe token o menus')

      setUsuario({ usuario, menus })
    } catch (errors) {
      localStorage.removeItem('usuario')
      router.push('/login')
      console.warn('debe iniciar sesion')
    }
  },
  render: () => h(App)
})

app.use(router)
app.use(createPinia())
app.use(Quasar, {
  plugins: {
    Notify,
    Dialog,
    Loading,
    AppFullscreen
  },
  lang: quasarLang,
  iconSet: quasarIconSet
  /*
  config: {
    brand: {
      // primary: '#e46262',
      // ... or all other brand colors
    },
    notify: {...}, // default set of options for Notify Quasar plugin
    loading: {...}, // default set of options for Loading Quasar plugin
    loadingBar: { ... }, // settings for LoadingBar Quasar plugin
    // ..and many more (check Installation card on each Quasar component/directive/plugin)
  }
  */
})

// Assumes you have a <div id="app"></div> in your index.html
app.mount('#app')
