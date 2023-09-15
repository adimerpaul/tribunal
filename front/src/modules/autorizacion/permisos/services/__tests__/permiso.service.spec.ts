import axios from '@/config/axios'

import type { IOpcionesPaginado } from '@/common/common.types'
import { describe, expect, it, vi } from 'vitest'
import type { IPermiso } from '../../permisos.types'
import { PermisoService } from '../permiso.service'

const opciones: IOpcionesPaginado = {
  page: 1,
  perPage: 1,
  search: [],
  sort: []
}

const ID_PERMISO = 1

describe('PermisoService', () => {
  describe('obtener un permiso', () => {
    it('Propiedades mínimas en respuesta', async () => {
      const response = await PermisoService.obtenerUno(ID_PERMISO)

      expect(response).toMatchObject({
        id: expect.any(Number),
        accion: expect.any(String),
        path: expect.any(String),
        tipo: expect.any(String)
      })
    })

    it('Debe retornar undefined, si da error', async () => {
      const spy = vi.spyOn(axios, 'get').mockImplementation(() => {
        return Promise.resolve({})
      })
      const response = await PermisoService.obtenerUno(ID_PERMISO)
      expect(axios.get).toHaveBeenCalled()
      expect(response).not.toBeDefined()
      spy.mockRestore()
    })
  })

  describe('obtener permisos', () => {
    it('Propiedades mínimas en respuesta', async () => {
      const response = await PermisoService.obtener(opciones)
      expect(response).not.toHaveProperty('pagination', '')
      expect(response).not.toHaveProperty('result', '')
    })

    it('Debe retornar undefined, si da error', async () => {
      const spy = vi.spyOn(axios, 'post').mockImplementation(() => {
        return Promise.resolve({})
      })
      const response = await PermisoService.obtener(opciones)
      expect(axios.post).toHaveBeenCalled()
      expect(response).not.toHaveProperty('pagination', '')
      expect(response).not.toHaveProperty('result', '')
      spy.mockRestore()
    })
  })

  describe('eliminar menu', () => {
    it('con existo', async () => {
      const spy = vi.spyOn(axios, 'delete').mockImplementation(() => {
        return Promise.resolve({ data: { response: { id: ID_PERMISO } } })
      })
      const response = await PermisoService.eliminar({ id: ID_PERMISO } as IPermiso)
      expect(axios.delete).toHaveBeenCalled()
      expect(response).toBeTruthy()
      spy.mockRestore()
    })

    it('sin éxito', async () => {
      const spy = vi.spyOn(axios, 'delete').mockImplementation(() => {
        return Promise.resolve({ data: undefined })
      })
      const response = await PermisoService.eliminar({ id: ID_PERMISO } as IPermiso)
      expect(axios.delete).toHaveBeenCalled()
      expect(response).toBeFalsy()
      spy.mockRestore()
    })
  })
})
