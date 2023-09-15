import axios from '@/config/axios'

import { describe, expect, it, vi } from 'vitest'
import { MenuService } from '../menu.service'
import type { IOpcionesPaginado } from '@/common/common.types'
import type { IMenu } from '../../menus.types'

const opciones: IOpcionesPaginado = {
  page: 1,
  perPage: 1,
  search: [],
  sort: []
}

const ID_MENU = 1

describe('MenuService', () => {
  describe('obtener un menu', () => {
    it('Propiedades mínimas en respuesta', async () => {
      const response = await MenuService.obtenerUno(ID_MENU)

      expect(response).toMatchObject({
        id: expect.any(String),
        nombre: expect.any(String),
        descripcion: expect.any(String),
        icono: expect.any(String),
        url: expect.any(String),
        ordenDespliegue: expect.any(Number),
        idPadre: expect.any(Number)
      })
    })

    it('Debe retornar undefined, si da error', async () => {
      const spy = vi.spyOn(axios, 'get').mockImplementation(() => {
        return Promise.resolve({})
      })
      const response = await MenuService.obtenerUno(ID_MENU)
      expect(axios.get).toHaveBeenCalled()
      expect(response).not.toBeDefined()
      spy.mockRestore()
    })
  })

  describe('obtener menus', () => {
    it('Propiedades mínimas en respuesta', async () => {
      const response = await MenuService.obtener(opciones)
      expect(response).not.toHaveProperty('pagination', '')
      expect(response).not.toHaveProperty('result', '')
    })

    it('Debe retornar undefined, si da error', async () => {
      const spy = vi.spyOn(axios, 'post').mockImplementation(() => {
        return Promise.resolve({})
      })
      const response = await MenuService.obtener(opciones)
      expect(axios.post).toHaveBeenCalled()
      expect(response).not.toHaveProperty('pagination', '')
      expect(response).not.toHaveProperty('result', '')
      spy.mockRestore()
    })
  })

  describe('eliminar menu', () => {
    it('con existo', async () => {
      const spy = vi.spyOn(axios, 'delete').mockImplementation(() => {
        return Promise.resolve({ data: { response: { id: ID_MENU } } })
      })
      const response = await MenuService.eliminar({ id: ID_MENU } as IMenu)
      expect(axios.delete).toHaveBeenCalled()
      expect(response).toBeTruthy()
      spy.mockRestore()
    })

    it('sin éxito', async () => {
      const spy = vi.spyOn(axios, 'delete').mockImplementation(() => {
        return Promise.resolve({ data: undefined })
      })
      const response = await MenuService.eliminar({ id: ID_MENU } as IMenu)
      expect(axios.delete).toHaveBeenCalled()
      expect(response).toBeFalsy()
      spy.mockRestore()
    })
  })
})
