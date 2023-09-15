import axios from '@/config/axios'
import type { IPermiso } from '../permisos.types'
import type { IOpcionesPaginado, IPaginado } from '@/common/common.types'
import { CrearRespuestaDePaginado } from '@/common/utils/crear-respuestas-iniciales'

const ENDPOINT = Object.freeze({
  RESOURCES: 'permisos',
  get PAGINADO() {
    return this.RESOURCES + '/paginado'
  }
})

/**
 * @params {IOpcionesPaginado} opciones - parametros de obtencion
 * @returns { pagination: IPaginado; result: IPermiso[] } Retorna Promise con funcionarios paginado
 **/

const obtener = async (
  opciones: IOpcionesPaginado
): Promise<{ pagination: IPaginado; result: IPermiso[] }> => {
  const respuesta = await axios.post(ENDPOINT.PAGINADO, opciones).catch(() => undefined)

  const _respuesta = CrearRespuestaDePaginado()
  const response = respuesta?.data?.response

  if (!response?.result || !response?.pagination) return _respuesta

  _respuesta.result = response.result.map((d: IPermiso, index: number) => {
    const _index = ++index + (opciones.page - 1) * opciones.perPage
    return {
      ...d,
      index: _index
    }
  })
  _respuesta.pagination = response.pagination

  return _respuesta
}

const obtenerUno = async (idPermiso?: number): Promise<IPermiso | undefined> => {
  if (!idPermiso) throw new Error('idPermiso es requerido')

  const respuesta = await axios.get(`${ENDPOINT.RESOURCES}/${idPermiso}`).catch(() => undefined)

  return respuesta?.data?.response
}

const guardar = async (permiso: IPermiso) => {
  const respuesta = await axios
    .post<{ response: IPermiso }>(ENDPOINT.RESOURCES, permiso)
    .catch(() => undefined)

  return respuesta?.data?.response
}

const actualizar = async (permiso: IPermiso) => {
  if (!permiso?.id) throw new Error('id es requerido')

  const respuesta = await axios
    .patch<{ response: IPermiso }>(`${ENDPOINT.RESOURCES}/${permiso.id}`, permiso)
    .catch(() => undefined)

  return respuesta?.data?.response
}

const eliminar = async (permiso: IPermiso) => {
  if (!permiso?.id) throw new Error('id es requerido')

  const respuesta = await axios.delete(ENDPOINT.RESOURCES + '/' + permiso.id).catch(() => undefined)

  return !!respuesta?.data?.response
}

export const PermisoService = Object.freeze({
  guardar,
  obtener,
  obtenerUno,
  eliminar,
  actualizar
})
