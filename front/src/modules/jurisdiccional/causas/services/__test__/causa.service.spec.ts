import { describe, expect, it, vi } from 'vitest'
import type { IOpcionesPaginado } from '../../../../../common/common.types'
import { CausaService } from '../causa.service'
import axios from '@/config/axios'

const opciones: IOpcionesPaginado = {
  page: 1,
  perPage: 1,
  search: [],
  sort: []
}
describe('CausaService', () => {
  describe('obtener salas', () => {
    it('Propiedades mínimas en respuesta', async () => {
      const response = await CausaService.obtener(opciones)
      expect(response).not.toHaveProperty('pagination', '')
      expect(response).not.toHaveProperty('result.0.id', '')
      expect(response).not.toHaveProperty('result.0.codigoUnico', '')
    })

    it('Debe retornar undefined, si da error', async () => {
      const spy = vi.spyOn(axios, 'post').mockImplementation(() => {
        return Promise.resolve({})
      })
      const response = await CausaService.obtener(opciones)
      expect(axios.post).toHaveBeenCalled()
      expect(response).not.toHaveProperty('pagination', '')
      expect(response).not.toHaveProperty('result', '')
      spy.mockRestore()
    })
  })
})
