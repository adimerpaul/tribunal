import axios from '@/config/axios'
import type { IDepartamento, IMunicipio } from '../../geografico.types'
import type { ICausa } from '@/modules/jurisdiccional/causas/causas.types'

const ENDPOINT = Object.freeze({
  RESOURCES: 'departamentos',
  getMunicipioByDepartamento(idDepartamento: number) {
    return `${this.RESOURCES}/${idDepartamento}/municipio`
  }
})

const obtener = async (): Promise<IDepartamento[]> => {
  const respuesta = await axios.get(ENDPOINT.RESOURCES).catch(() => undefined)
  return respuesta?.data?.response ?? []
}

const obtenerByCategoria = async (idDepartamento: number): Promise<IMunicipio[]> => {
  if (!idDepartamento) throw new Error('idDepartamento es requerido')
  const respuesta = await axios
    .get(ENDPOINT.getMunicipioByDepartamento(idDepartamento))
    .catch(() => undefined)
  return respuesta?.data?.response
}

export const DepartamentoService = Object.freeze({
  obtener,
  obtenerByCategoria
})
