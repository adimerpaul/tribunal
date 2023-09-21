import axios from '@/config/axios'
import type { ITipoEstadoCivil } from '../../catalogo.types'

const ENDPOINT = Object.freeze({
  RESOURCES: 'tipos-estados-civiles'
})

const obtener = async (): Promise<ITipoEstadoCivil[]> => {
  const respuesta = await axios.get(ENDPOINT.RESOURCES).catch(() => undefined)

  return respuesta?.data?.response ?? []
}

export const TipoEstadoCivilService = Object.freeze({
  obtener
})
