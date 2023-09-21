import axios from '@/config/axios'
import type { IOpcionesPaginado, IPaginado } from '../../../../common/common.types'
import { CrearRespuestaDePaginado } from '../../../../common/utils/crear-respuestas-iniciales'
import type { ICausa } from './../causas.types'
import { IntlLocalShort } from '@/config/intl'

const ENDPOINT = Object.freeze({
  RESOURCES: 'causas',
  get PAGINADO() {
    return this.RESOURCES + '/listar'
  }
})

/**
 * @params {IOpcionesPaginado} opciones - parametros de obtencion
 * @returns { pagination: IPaginado; result: ICausa[] } Retorna Promise con Causas paginado
 **/
const obtener = async (
  opciones: IOpcionesPaginado
): Promise<{ pagination: IPaginado; result: ICausa[] }> => {
  const respuesta = await axios.post(ENDPOINT.PAGINADO, opciones).catch(() => undefined)

  const _respuesta = CrearRespuestaDePaginado()
  const response = respuesta?.data?.response

  if (!response?.result || !response?.pagination) return _respuesta

  _respuesta.result = response.result.map((d: ICausa, index: number): ICausa => {
    const _index = ++index + (opciones.page - 1) * opciones.perPage
    return {
      ...d,
      index: _index,
      hechoFechaHoraLF: IntlLocalShort.format(new Date(d.hechoFechaHora ?? '')),
      hechoFechaHoraFinLF: IntlLocalShort.format(new Date(d.hechoFechaHoraFin ?? ''))
    }
  })
  _respuesta.pagination = response.pagination

  return _respuesta
}
const guardar = async (causa: ICausa) => {
  const respuesta = await axios
    .post<{ response: ICausa }>(ENDPOINT.RESOURCES, causa)
    .catch(() => undefined)
  return respuesta
}

const actualizar = async () => {
  return null
}

export const CausaService = Object.freeze({
  obtener,
  guardar,
  actualizar
})
