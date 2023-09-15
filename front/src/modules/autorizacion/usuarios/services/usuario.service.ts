import axios from '@/config/axios'
import type { IUsuario } from '../usuarios.types'
import type { IOpcionesPaginado, IPaginado } from '@/common/common.types'
import { CrearRespuestaDePaginado } from '@/common/utils/crear-respuestas-iniciales'

const ENDPOINT = Object.freeze({
  RESOURCES: 'usuarios',
  get PAGINADO() {
    return this.RESOURCES + '/paginado'
  }
})

/**
 * @params {IOpcionesPaginado} opciones - parametros de obtencion
 * @returns { pagination: IPaginado; result: IUsuario[] } Retorna Promise con funcionarios paginado
 **/

const obtener = async (
  opciones: IOpcionesPaginado
): Promise<{ pagination: IPaginado; result: IUsuario[] }> => {
  const respuesta = await axios.post(ENDPOINT.PAGINADO, opciones).catch(() => undefined)

  const _respuesta = CrearRespuestaDePaginado()
  const response = respuesta?.data?.response

  if (!response?.result || !response?.pagination) return _respuesta

  _respuesta.result = response.result.map((d: IUsuario, index: number) => {
    const _index = ++index + (opciones.page - 1) * opciones.perPage
    return {
      ...d,
      index: _index
    }
  })
  _respuesta.pagination = response.pagination

  console.log(_respuesta);
  
  return _respuesta
}

const obtenerUno = async (idUsuario?: number): Promise<IUsuario | undefined> => {
  if (!idUsuario) throw new Error('idUsuario es requerido')

  const respuesta = await axios.get(`${ENDPOINT.RESOURCES}/${idUsuario}`).catch(() => undefined)  

  return respuesta?.data?.response
}

const guardar = async (usuario: IUsuario) => {
  const respuesta = await axios
    .post<{ response: IUsuario }>(ENDPOINT.RESOURCES, usuario)
    .catch(() => undefined)

  return respuesta?.data?.response
}

const actualizar = async (usuario: IUsuario) => {
  if (!usuario?.id) throw new Error('id es requerido')

  const respuesta = await axios
    .patch<{ response: IUsuario }>(`${ENDPOINT.RESOURCES}/${usuario.id}`, usuario)
    .catch(() => undefined)

  return respuesta?.data?.response
}

const eliminar = async (usuario: IUsuario) => {
  if (!usuario?.id) throw new Error('id es requerido')

  const respuesta = await axios.delete(ENDPOINT.RESOURCES + '/' + usuario.id).catch(() => undefined)

  return !!respuesta
}

export const UsuarioService = Object.freeze({
  obtener,
  guardar,
  obtenerUno,
  eliminar,
  actualizar
})
