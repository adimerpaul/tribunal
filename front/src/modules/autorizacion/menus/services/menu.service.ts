import { type IMenu } from '../menus.types'
import axios from '@/config/axios'
import type { IOpcionesPaginado, IPaginado } from '@/common/common.types'
import { CrearRespuestaDePaginado } from '@/common/utils/crear-respuestas-iniciales'

const ENDPOINT = Object.freeze({
  RESOURCES: 'menus',
  get PAGINADO() {
    return this.RESOURCES + '/listar'
  }
})

/**
 * @params {IOpcionesPaginado} opciones - parametros de obtencion
 * @returns { pagination: IPaginado; result: IMenu[] } Retorna Promise con funcionarios paginado
 **/
const obtener = async (
  opciones: IOpcionesPaginado
): Promise<{ pagination: IPaginado; result: IMenu[] }> => {
  const respuesta = await axios.post(ENDPOINT.PAGINADO, opciones).catch(() => undefined)

  const nuevaRespuesta = CrearRespuestaDePaginado()
  const response = respuesta?.data?.response

  if (!response?.result || !response?.pagination) return nuevaRespuesta

  nuevaRespuesta.result = response.result.map((d: IMenu, index: number) => {
    const _index = ++index + (opciones.page - 1) * opciones.perPage
    return {
      ...d,
      index: _index
    }
  })
  nuevaRespuesta.pagination = response.pagination

  return nuevaRespuesta
}

const obtenerUno = async (idMenu?: number): Promise<IMenu | undefined> => {
  if (!idMenu) throw new Error('idMenu es requerido')

  const respuesta = await axios.get(`${ENDPOINT.RESOURCES}/${idMenu}`).catch(() => undefined)

  return respuesta?.data?.response
}

const guardar = async (menu: IMenu) => {
  menu.idPadre ?? (menu.idPadre = 0)
  const respuesta = await axios
    .post<{ response: IMenu }>(ENDPOINT.RESOURCES, menu)
    .catch(() => undefined)

  return respuesta?.data?.response
}

const actualizar = async (menu: IMenu) => {
  if (!menu?.id) throw new Error('id es requerido')

  const respuesta = await axios
    .patch<{ response: IMenu }>(`${ENDPOINT.RESOURCES}/${menu.id}`, menu)
    .catch(() => undefined)

  return respuesta?.data?.response
}

const eliminar = async (menu: IMenu) => {
  if (!menu?.id) throw new Error('id es requerido')

  const respuesta = await axios.delete(ENDPOINT.RESOURCES + '/' + menu.id).catch(() => undefined)

  return !!respuesta?.data?.response
}

export const MenuService = Object.freeze({
  obtener,
  obtenerUno,
  guardar,
  actualizar,
  eliminar
})
