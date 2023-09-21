import axios from '@/config/axios'
import type { ISalasAudiencia } from '../salas-audiencias.types'
import type { IOpcionesPaginado, IPaginado } from '@/common/common.types'
import { CrearRespuestaDePaginado } from '@/common/utils/crear-respuestas-iniciales'

const ENDPOINT = Object.freeze({
  RESOURCES: 'salas-audiencias',
  get PAGINADO() {
    return this.RESOURCES + '/paginado'
  }
})

/**
 * @params {IOpcionesPaginado} opciones - parametros de obtencion
 * @returns { pagination: IPaginado; result: ISalasAudiencia[] } Retorna Promise con funcionarios paginado
 **/

const obtener = async (
  opciones: IOpcionesPaginado
): Promise<{ pagination: IPaginado; result: ISalasAudiencia[] }> => {
  const respuesta = await axios.post(ENDPOINT.PAGINADO, opciones).catch(() => undefined)

  const _respuesta = CrearRespuestaDePaginado()
  const response = respuesta?.data?.response

  if (!response?.result || !response?.pagination) return _respuesta

  _respuesta.result = response.result.map((d: ISalasAudiencia, index: number) => {
    const _index = ++index + (opciones.page - 1) * opciones.perPage
    return {
      ...d,
      index: _index
    }
  })
  _respuesta.pagination = response.pagination

  return _respuesta
}

const obtenerUno = async (idSalaAudiencia?: number): Promise<ISalasAudiencia | undefined> => {
  if (!idSalaAudiencia) throw new Error('idSalaAudiencia es requerido')

  const respuesta = await axios
    .get(`${ENDPOINT.RESOURCES}/${idSalaAudiencia}`)
    .catch(() => undefined)

  return respuesta?.data?.response
}

const guardar = async (salaAudiencia: ISalasAudiencia) => {
  const respuesta = await axios
    .post<{ response: ISalasAudiencia }>(ENDPOINT.RESOURCES, salaAudiencia)
    .catch(() => undefined)

  return respuesta?.data?.response
}

const actualizar = async (salaAudiencia: ISalasAudiencia) => {
  if (!salaAudiencia?.id) throw new Error('id es requerido')

  const respuesta = await axios
    .patch<{ response: ISalasAudiencia }>(
      `${ENDPOINT.RESOURCES}/${salaAudiencia.id}`,
      salaAudiencia
    )
    .catch(() => undefined)

  return respuesta?.data?.response
}

const eliminar = async (salaAudiencia: ISalasAudiencia) => {
  if (!salaAudiencia?.id) throw new Error('id es requerido')

  const respuesta = await axios
    .delete(ENDPOINT.RESOURCES + '/' + salaAudiencia.id)
    .catch(() => undefined)

  return !!respuesta?.data?.response
}

export const SalaAudienciaService = Object.freeze({
  guardar,
  obtener,
  obtenerUno,
  eliminar,
  actualizar
})
