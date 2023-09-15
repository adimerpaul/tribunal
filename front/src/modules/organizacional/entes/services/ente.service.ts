import axios from '@/config/axios'
import type { IEnte } from '../ente.types'

const ENDPOINT = Object.freeze({
  RESOURCES: 'entes'
})

const obtener = async (): Promise<IEnte[]> => {
  const respuesta = await axios.get(ENDPOINT.RESOURCES).catch(() => undefined)

  const response = respuesta?.data?.response

  if (!response) return []

  return response
}

export const EnteService = Object.freeze({
  obtener
})
