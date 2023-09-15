import axios from '@/config/axios'
import type { IRol } from '../roles.types'
import type { IOpcionesPaginado, IPaginado } from '@/common/common.types'
import { CrearRespuestaDePaginado } from '@/common/utils/crear-respuestas-iniciales'

const ENDPOINT = Object.freeze({
  RESOURCES: 'roles',
  get PAGINADO() {
    return this.RESOURCES + '/paginado'
  }
})

const list = async (
  options: IOpcionesPaginado
): Promise<{ pagination: IPaginado; result: IRol[] }> => {
  const roles = await axios.post(ENDPOINT.PAGINADO, options).catch(() => undefined)
  const list = CrearRespuestaDePaginado()

  const response = roles?.data?.response
  if (!response?.result || !response?.pagination) return list

  list.result = response.result.map((data: IRol, index: number) => {
    const _index = ++index + (options.page - 1) * options.perPage

    return {
      ...data,
      index: _index
    }
  })

  list.pagination = response.pagination

  return list
}

const save = async (rol: IRol) => {
  const result = await axios
    .post<{ response: IRol }>(ENDPOINT.RESOURCES, rol)
    .catch(() => undefined)

  return result?.data?.response
}

const update = async (rol: IRol) => {
  if (!rol.id) throw new Error('id Rol es requerido')

  const result = await axios
    .patch<{ response: IRol }>(`${ENDPOINT.RESOURCES}/${rol.id}`, rol)
    .catch(() => undefined)

  return result?.data?.response
}

const deleteRol = async (rol: IRol) => {
  if (!rol.id) throw new Error('id Rol es requerido')

  const rolDelete = await axios.delete(ENDPOINT.RESOURCES + '/' + rol.id).catch(() => undefined)

  return !!rolDelete
}

const find = async (idRol?: number): Promise<IRol | undefined> => {
  if (!idRol) throw new Error('idRol es requerido')

  const result = await axios.get(`${ENDPOINT.RESOURCES}/${idRol}`).catch(() => undefined)

  return result?.data.response
}

export const RolService = Object.freeze({
  list,
  save,
  update,
  deleteRol,
  find
})
