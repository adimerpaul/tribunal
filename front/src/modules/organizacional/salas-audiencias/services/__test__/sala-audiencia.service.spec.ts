import axios from '@/config/axios'

import type { IOpcionesPaginado } from '@/common/common.types'
import { describe, expect, it, vi } from 'vitest'
import type { ISalasAudiencia } from '../../salas-audiencias.types'
import { SalaAudienciaService } from '../sala-audiencia.service'

const opciones: IOpcionesPaginado = {
  page: 1,
  perPage: 1,
  search: [],
  sort: []
}

const ID_SALA = 1

describe('SalaAudienciaService', () => {
  describe('obtener una sala', () => {
    it('Propiedades mínimas en respuesta', async () => {
      const response = await SalaAudienciaService.obtenerUno(ID_SALA)

      expect(response).toMatchObject({
        id: expect.any(Number),
        descripcion: expect.any(String),
        ubicacion: expect.any(String),
        dimension: expect.any(String),
        capacidad: expect.any(String),
        esCamaraGesell: expect.any(Boolean)
      })
    })

    it('Debe retornar undefined, si da error', async () => {
      const spy = vi.spyOn(axios, 'get').mockImplementation(() => {
        return Promise.resolve({})
      })
      const response = await SalaAudienciaService.obtenerUno(ID_SALA)
      expect(axios.get).toHaveBeenCalled()
      expect(response).not.toBeDefined()
      spy.mockRestore()
    })
  })

  describe('obtener salas', () => {
    it('Propiedades mínimas en respuesta', async () => {
      const response = await SalaAudienciaService.obtener(opciones)
      expect(response).not.toHaveProperty('pagination', '')
      expect(response).not.toHaveProperty('result', '')
    })

    it('Debe retornar undefined, si da error', async () => {
      const spy = vi.spyOn(axios, 'post').mockImplementation(() => {
        return Promise.resolve({})
      })
      const response = await SalaAudienciaService.obtener(opciones)
      expect(axios.post).toHaveBeenCalled()
      expect(response).not.toHaveProperty('pagination', '')
      expect(response).not.toHaveProperty('result', '')
      spy.mockRestore()
    })
  })

  describe('eliminar sala', () => {
    it('con existo', async () => {
      const spy = vi.spyOn(axios, 'delete').mockImplementation(() => {
        return Promise.resolve({ data: { response: { id: ID_SALA } } })
      })
      const response = await SalaAudienciaService.eliminar({ id: ID_SALA } as ISalasAudiencia)
      expect(axios.delete).toHaveBeenCalled()
      expect(response).toBeTruthy()
      spy.mockRestore()
    })

    it('sin éxito', async () => {
      const spy = vi.spyOn(axios, 'delete').mockImplementation(() => {
        return Promise.resolve({ data: undefined })
      })
      const response = await SalaAudienciaService.eliminar({ id: ID_SALA } as ISalasAudiencia)
      expect(axios.delete).toHaveBeenCalled()
      expect(response).toBeFalsy()
      spy.mockRestore()
    })
  })
})
