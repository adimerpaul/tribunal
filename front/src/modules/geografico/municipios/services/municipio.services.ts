import axios from '@/config/axios'
import type { IMunicipio } from '../../geografico.types'

const ENDPOINT = Object.freeze({
  RESOURCES: 'municipios'
})

const obtener = async (): Promise<IMunicipio[]> => {
  const respuesta = await axios.get(ENDPOINT.RESOURCES).catch(() => undefined)

  return respuesta?.data?.response ?? []
}

export const MunicipioService = Object.freeze({
  obtener
})
