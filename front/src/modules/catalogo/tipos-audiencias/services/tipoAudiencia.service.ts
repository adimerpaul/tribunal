import axios from '@/config/axios'
import type { IOpcionesPaginado, IPaginado } from '@/common/common.types'
import { CrearRespuestaDePaginado } from '@/common/utils/crear-respuestas-iniciales'
import type { ITipoAudiencia } from '../tipoAudiencia.types'

const ENDPOINT = Object.freeze({
  RESOURCES: 'tipos-audiencias',
  get PAGINADO() {
    return this.RESOURCES + '/paginado'
  }
})

/**
 * @params {IOpcionesPaginado} opciones - parametros de obtencion
 * @returns { pagination: IPaginado; result: ITipoAudiencia[] } Retorna Promise con Tipos Audiencias paginado
 **/

const obtener = async (
  opciones: IOpcionesPaginado
): Promise<{ pagination: IPaginado; result: ITipoAudiencia[] }> => {
  const respuesta = await axios.post(ENDPOINT.PAGINADO, opciones).catch(() => undefined)
  const _respuesta = CrearRespuestaDePaginado()
  const response = respuesta?.data?.response

  if (!response?.result || !response?.pagination) return _respuesta

  _respuesta.result = response.result.map((d: ITipoAudiencia, index: number) => {
    const _index = ++index + (opciones.page - 1) * opciones.perPage
    return {
      ...d,
      index: _index
    }
  })
  _respuesta.pagination = response.pagination

  return _respuesta
}

const obtenerUno = async (idAudiencia?: number): Promise<ITipoAudiencia | undefined> => {
  if (!idAudiencia) throw new Error('idAudiencia es requerido')

  const respuesta = await axios.get(`${ENDPOINT.RESOURCES}/${idAudiencia}`).catch(() => undefined)

  return respuesta?.data?.response
}

const guardar = async (audiencia: ITipoAudiencia) => {
  const respuesta = await axios
    .post<{ response: ITipoAudiencia }>(ENDPOINT.RESOURCES, audiencia)
    .catch(() => undefined)

  return respuesta?.data?.response
}

const actualizar = async (audiencia: ITipoAudiencia) => {
  if (!audiencia?.id) throw new Error('id es requerido')

  const respuesta = await axios
    .patch<{ response: ITipoAudiencia }>(`${ENDPOINT.RESOURCES}/${audiencia.id}`, audiencia)
    .catch(() => undefined)

  return respuesta?.data?.response
}

const eliminar = async (audiencia: ITipoAudiencia) => {
  if (!audiencia?.id) throw new Error('id es requerido')

  const respuesta = await axios
    .delete(ENDPOINT.RESOURCES + '/' + audiencia.id)
    .catch(() => undefined)

  return !!respuesta
}

export const AudienciaService = Object.freeze({
  obtener,
  guardar,
  obtenerUno,
  eliminar,
  actualizar
})
