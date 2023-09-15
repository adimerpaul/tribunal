import type { IPaginado } from '../common.types'

export const CrearRespuestaDePaginado = () => ({
  pagination: {
    totalItems: 0,
    itemCount: 0,
    perPage: 0,
    currentPage: 0
  } as IPaginado,
  result: []
})
