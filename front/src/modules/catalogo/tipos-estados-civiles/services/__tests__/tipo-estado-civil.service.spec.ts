import { describe, it, expect, vi } from 'vitest'
import { TipoEstadoCivilService } from '../tipo-estado-civil.service'
import axios from '@/config/axios'

describe('TipoCargoFuncionarioService', () => {
  describe('obtener estados civiles', () => {
    it('Propiedades mínimas en respuesta', async () => {
      const response = await TipoEstadoCivilService.obtener()

      expect(response).not.toHaveProperty('id', expect.any(Number))
      expect(response).not.toHaveProperty('codigo', expect.any(Number))
      expect(response).not.toHaveProperty('descripcion', expect.any(String))
    })

    it('Debe retornar array vació, si da error en backend', async () => {
      const spy = vi.spyOn(axios, 'get').mockImplementation(() => {
        return Promise.resolve({})
      })
      const response = await TipoEstadoCivilService.obtener()
      expect(axios.get).toHaveBeenCalled()
      expect(response.length).toEqual(0)
      spy.mockRestore()
    })
  })
})
