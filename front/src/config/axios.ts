import Axios, { AxiosError } from 'axios'
import { Notify } from 'quasar'
import { type IUsuario } from '@/modules/modules.types'

const baseURL = import.meta.env.VITE_URL_BASE_ENDPOINT || ''
const axios = Axios.create({ baseURL })
Axios.defaults.baseURL = baseURL

const KEY_USUARIO_LOCAL_STORAGE = 'usuario'

axios.interceptors.response.use(
  (response) => {
    if (!response.data?.message) return response

    if (
      [201, 204].includes(response.status) ||
      (['put', 'patch', 'delete'].includes(response.config.method as string) &&
        response.status === 200)
    ) {
      Notify.create?.({
        message: `<strong>${response.data.message.toUpperCase()}</strong>`,
        type: 'positive'
      })
    }
    return response
  },
  async (errors: AxiosError) => {
    let mensaje = ''
    const status = errors?.response?.status
    const data: any = errors?.response?.data

    if (errors.message === 'Network Error') {
      Notify.create({
        type: 'negative',
        timeout: 10000,
        message: '<strong>ERROR DE CONEXION</strong>'
      })
      return Promise.reject(errors)
    }

    const originalConfig: any = errors.config

    if (originalConfig?.url !== 'auth/login' && status === 401 && !originalConfig?._retry) {
      originalConfig._retry = true

      try {
        const usuarioLocalStorage = localStorage.getItem(KEY_USUARIO_LOCAL_STORAGE)

        if (!usuarioLocalStorage) throw new Error('no existe en localStorage')

        const { usuario }: { usuario: IUsuario } = JSON.parse(usuarioLocalStorage)

        const rs = await Axios.post('auth/refresh', null, {
          headers: {
            Authorization: `Bearer ${usuario?.refreshToken}`
          }
        })

        const { token, refreshToken } = rs.data.data
        usuario.accessToken = token
        usuario.refreshToken = refreshToken

        localStorage.setItem(KEY_USUARIO_LOCAL_STORAGE, JSON.stringify(usuario))
        originalConfig.headers.Authorization = 'Bearer ' + token
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

        return axios(originalConfig)
      } catch (_error) {
        localStorage.clear()
        location.href = '/login'
        return _error
      }
    }

    if (status === 403) {
      mensaje = `<strong>ACCESO NO AUTORIZADO</strong>`
    } else if (status === 500) {
      mensaje = `<strong>ERROR DE SERVIDOR</strong>`
    } else if (status === 400 && typeof data === 'string' && data.includes('ows:Exception')) {
      mensaje = `<strong>Tipo de búsqueda no aceptada por la capa</strong>`
    } else {
      const _errors = data?.response ?? ''
      const message = data?.message ?? ''
      const title = message ? `<p style="margin: 0; font-weight: bold">${message}</p>` : ''
      mensaje = title
      if (Array.isArray(_errors)) {
        let formatErrors = ''
        for (const error of _errors.slice(0, 4)) {
          formatErrors += '<li><b> ' + error + '</b></li>'
        }
        mensaje += formatErrors
      } else if (typeof _errors === 'string') {
        mensaje += _errors
      }
    }

    !originalConfig._retry &&
      mensaje.length > 0 &&
      Notify.create({
        type: 'negative',
        timeout: 10000,
        message: mensaje
      })
    return Promise.reject(errors)
  }
)

export default axios
