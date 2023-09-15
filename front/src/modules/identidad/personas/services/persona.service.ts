import axios from '@/config/axios'

const ENDPOINT = Object.freeze({
  ENCONTRAR: 'segip/directo/'
})

const encontrar = async (numeroDocumentoIdentidad?: string): Promise<any | undefined> => {
  if (!numeroDocumentoIdentidad) throw new Error('numeroDocumentoIdentidad es requerido')

  const respuesta = await axios
    .get(ENDPOINT.ENCONTRAR + numeroDocumentoIdentidad)
    .catch(() => undefined)

  return respuesta?.data?.response
}

export const PermisoService = Object.freeze({
  encontrar
})
