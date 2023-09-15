import { describe, it, expect, vi } from 'vitest'
import { TipoCargoFuncionarioService } from '../tipo-cargo-funcionario.service'
import axios from '@/config/axios'

describe('TipoCargoFuncionarioService', () => {
  describe('obtener cargos', () => {
    it('Propiedades mínimas en respuesta', async () => {
      const response = await TipoCargoFuncionarioService.obtener()

      expect(response).not.toHaveProperty('id', expect.any(Number))
      expect(response).not.toHaveProperty('codigo', expect.any(Number))
      expect(response).not.toHaveProperty('descripcion', expect.any(String))
    })

    it('Debe retornar array vació, si da error en backend', async () => {
      const spy = vi.spyOn(axios, 'get').mockImplementation(() => {
        return Promise.resolve({})
      })
      const response = await TipoCargoFuncionarioService.obtener()
      expect(axios.get).toHaveBeenCalled()
      expect(response.length).toEqual(0)
      spy.mockRestore()
    })
  })
})
