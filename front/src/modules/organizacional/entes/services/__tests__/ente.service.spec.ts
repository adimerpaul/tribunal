import { describe, it, expect, vi } from 'vitest'
import { EnteService } from '../ente.service'
import axios from '@/config/axios'

describe('EnteService', () => {
  describe('obtener entes', () => {
    it('Propiedades mínimas en respuesta', async () => {
      const response = await EnteService.obtener()

      expect(response).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            descripcion: expect.any(String),
            idDepartamento: expect.any(Number),
            sigla: expect.any(String)
          })
        ])
      )
    })

    it('Debe retornar array vació, si da error en backend', async () => {
      const spy = vi.spyOn(axios, 'get').mockImplementation(() => {
        return Promise.resolve({})
      })
      const response = await EnteService.obtener()
      expect(axios.get).toHaveBeenCalled()
      expect(response.length).toEqual(0)
      spy.mockRestore()
    })
  })
})
