import { expect } from 'vitest'
import axios from './config/axios'
import { AutorizacionService } from './modules/autorizacion/login/services/autenticacion.service'

const credenciales = { usuario: 'admin', clave: 'hola123' }
const response = await AutorizacionService.iniciarSesion(credenciales)
expect(response).toBeDefined()
expect(response?.usuario).not.toHaveProperty('accessToken', '')
axios.defaults.headers.common['Authorization'] = 'Bearer ' + response?.usuario?.accessToken
