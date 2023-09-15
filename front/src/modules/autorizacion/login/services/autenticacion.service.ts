import axios from '@/config/axios'
import { type IUsuario } from '../login.types'
import type { IMenus } from '@/modules/modules.types'

const ENDPOINT = Object.freeze({
  ESTADO: 'estado',
  LOGIN: 'auth/login',
  LOGOUT: 'auth/logout'
})

const iniciarSesion = async (credenciales: { usuario: string; clave: string }) => {
  axios.defaults.headers.common['Authorization'] = ''

  const respuesta = await axios
    .post<{ response: { usuario: IUsuario; menus: IMenus[] } }>(ENDPOINT.LOGIN, credenciales)
    .catch(() => undefined)
  if (!respuesta) return

  return respuesta?.data?.response
}

const cerrarSesion = async () => {
  const respuesta = await axios.post(ENDPOINT.LOGOUT).catch(() => undefined)

  return respuesta?.data?.response
}

const estado = async () => {
  const respuesta = await axios.get(ENDPOINT.ESTADO).catch(() => undefined)

  return respuesta?.data?.response
}

export const AutorizacionService = Object.freeze({
  iniciarSesion,
  estado,
  cerrarSesion
})
