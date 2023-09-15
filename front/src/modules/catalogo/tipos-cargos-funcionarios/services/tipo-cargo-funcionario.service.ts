import axios from '@/config/axios'
import type { ITipoCargoFuncionario } from '../tipo-cargo-funcionario.types'

const ENDPOINT = Object.freeze({
  RESOURCES: 'tipos-cargos-funcionarios'
})

const obtener = async (): Promise<ITipoCargoFuncionario[]> => {
  const respuesta = await axios.get(ENDPOINT.RESOURCES).catch(() => undefined)

  const response = respuesta?.data?.response

  if (!response) return []

  return response
}

export const TipoCargoFuncionarioService = Object.freeze({
  obtener
})
