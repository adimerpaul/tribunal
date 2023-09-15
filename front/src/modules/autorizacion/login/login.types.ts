export interface ICredenciales {
  usuario: string
  clave: string
}

export interface IUsuario {
  id: number
  idPersona: string
  usuario: string
  accessToken: string
  refreshToken: string

  roles: any[]
  idRol: string
  persona: IPersona
  ciudadania_digital: boolean
}

export interface IPersona {
  nombres: string
  primerApellido: string
  segundoApellido: string
  tipoDocumento: string
  nroDocumento: string
  fechaNacimiento: string
  fotografia: string
  nombreCompleto: string
}
