import axios from '@/config/axios'
import { AutorizacionService } from '@/modules/autorizacion/login/services/autenticacion.service'

import { describe, expect, it, vi } from 'vitest'

const credenciales = {
  usuario: 'admin',
  clave: 'hola123'
}
describe('UsuarioService', () => {
  it('Propiedades minimas en respuesta', async () => {
    const response = await AutorizacionService.iniciarSesion(credenciales)

    expect(response).toBeDefined()
    expect(response).not.toHaveProperty('usuario', '')
    expect(response?.usuario).not.toHaveProperty('accessToken', '')
  })

  it('Debe retornar unidefined, si da error en backend', async () => {
    const spy = vi.spyOn(axios, 'post').mockImplementation(() => {
      return Promise.resolve({})
    })
    const response = await AutorizacionService.iniciarSesion(credenciales)
    expect(axios.post).toHaveBeenCalled()
    expect(response).toBe(undefined)
    spy.mockRestore()
  })
})
