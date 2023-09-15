import { reactive, readonly } from 'vue'
import axios from './config/axios'
import type { IMenus, IUsuario } from './modules/modules.types'

export const KEY_USUARIO_LOCAL_STORAGE = 'usuario'

export type InitUsuario = { usuario?: IUsuario; menus?: IMenus[] }

const state = reactive<InitUsuario>({
  usuario: undefined,
  menus: undefined
})

const setUsuario = (initUsuario?: InitUsuario) => {
  if (
    !initUsuario?.usuario?.refreshToken ||
    !initUsuario?.usuario?.accessToken ||
    !initUsuario?.menus
  ) {
    localStorage.removeItem(KEY_USUARIO_LOCAL_STORAGE)
    throw new Error('no existe el token o los menus')
  }

  const { usuario, menus } = initUsuario
  state.usuario = usuario
  state.menus = menus
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + usuario.accessToken

  localStorage.setItem(KEY_USUARIO_LOCAL_STORAGE, JSON.stringify(initUsuario))
}

const eliminarUsuario = () => {
  localStorage.removeItem(KEY_USUARIO_LOCAL_STORAGE)
  state.menus = undefined
  state.usuario = undefined
}

export default { state: readonly(state), setUsuario, eliminarUsuario }
