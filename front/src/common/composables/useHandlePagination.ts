import { ref, type Ref } from 'vue'
import type { IOpcionesPaginado, IPaginado, IPaginationProps, ISearch } from '../common.types'

export function useHandlePagination<T>(
  serviceParam: (options: IOpcionesPaginado) => Promise<{ pagination: IPaginado; result: T[] }>,
  searchParam?: () => ISearch[],
  sort: IOpcionesPaginado['sort'] = []
) {
  const isLoading = ref(false)
  const response: Ref<T[]> = ref([])

  const pagination = ref({
    sortBy: 'desc',
    descending: false,
    page: 1,
    rowsPerPage: Number(import.meta.env.VITE_ROWS_BY_TABLE),
    rowsNumber: 0
  })

  const executeService = async (props?: { pagination: IPaginationProps }) => {
    const _pagination = props?.pagination ?? pagination.value

    const { page, rowsPerPage, sortBy, descending } = _pagination

    const search: ISearch[] = searchParam?.() ?? []

    const opciones: IOpcionesPaginado = {
      page,
      perPage: rowsPerPage,
      search,
      sort
    }

    isLoading.value = true
    const resultado = await serviceParam(opciones)
    isLoading.value = false

    if (!resultado) return

    response.value = resultado.result

    pagination.value = {
      page,
      rowsPerPage,
      sortBy,
      descending,
      rowsNumber: resultado.pagination.totalItems
    }
  }

  return { isLoading, executeService, response, pagination }
}
