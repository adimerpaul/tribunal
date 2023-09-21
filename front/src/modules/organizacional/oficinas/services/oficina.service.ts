import axios from '@/config/axios'
import type { IOpcionesPaginado, IPaginado } from '@/common/common.types'
import { CrearRespuestaDePaginado } from '@/common/utils/crear-respuestas-iniciales'
import type { IOficina } from '../oficinas.types'

const ENDPOINT = Object.freeze({
  RESOURCES: 'oficinas',
  get PAGINADO() {
    return this.RESOURCES + '/paginado'
  }
})

/**
 * @params {IOpcionesPaginado} opciones - parametros de obtencion
 * @returns { pagination: IPaginado; result: IOficina[] } Retorna Promise con Tipos Oficinas paginado
 **/

const obtener = async (
  opciones: IOpcionesPaginado
): Promise<{ pagination: IPaginado; result: IOficina[] }> => {
  const respuesta = await axios.post(ENDPOINT.PAGINADO, opciones).catch(() => undefined)
  const _respuesta = CrearRespuestaDePaginado()
  const response = respuesta?.data?.response

  if (!response?.result || !response?.pagination) return _respuesta

  _respuesta.result = response.result.map((d: IOficina, index: number) => {
    const _index = ++index + (opciones.page - 1) * opciones.perPage
    return {
      ...d,
      index: _index
    }
  })
  _respuesta.pagination = response.pagination

  return _respuesta
}

const obtenerUno = async (idOficina?: number): Promise<IOficina | undefined> => {
  if (!idOficina) throw new Error('idOficina es requerido')

  const respuesta = await axios.get(`${ENDPOINT.RESOURCES}/${idOficina}`).catch(() => undefined)

  return respuesta?.data?.response
}

const guardar = async (oficina: IOficina) => {
  const respuesta = await axios
    .post<{ response: IOficina }>(ENDPOINT.RESOURCES, oficina)
    .catch(() => undefined)

  return respuesta?.data?.response
}

const actualizar = async (oficina: IOficina) => {
  if (!oficina?.id) throw new Error('id es requerido')

  const respuesta = await axios
    .patch<{ response: IOficina }>(`${ENDPOINT.RESOURCES}/${oficina.id}`, oficina)
    .catch(() => undefined)

  return respuesta?.data?.response
}

const eliminar = async (oficina: IOficina) => {
  if (!oficina?.id) throw new Error('id es requerido')

  const respuesta = await axios.delete(ENDPOINT.RESOURCES + '/' + oficina.id).catch(() => undefined)

  return !!respuesta
}

export const OficinaService = Object.freeze({
  obtener,
  guardar,
  obtenerUno,
  eliminar,
  actualizar
})
