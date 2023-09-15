export type AccionPermiso = 'CREATE' | 'READ' | 'UPDATED' | 'DELETE'

export interface IUsuario {
  id?: number
  index?: number
  estado: boolean
  usuario: string
  persona: IPersona
  accion?: AccionPermiso
}

export interface IPersona {
  tipoDocumento: string
  nroDocumento: string
  nombres: string
  primerApellido: string
  segundoApellido: string
  fechaNacimiento: string
  idNacionalidad: number
  idMunicipio: number
  sexo: string
  estadoCivil: number
  profesion: string
  celular: number
  email: string
  ciudadanoDigital: boolean
  fotografia: string
  domicilio: IDomicilio
  funcionario: IFuncionario
}

export interface IDomicilio {
  id?: number
  idPais: number
  idMunicipio: number
  direccion: string
  latitud: number
  longitud: number
}

export interface IFuncionario {
  id?: number
  idCargo: number
  tipoContrato: string
  emailInstitucional: string
  idOficina: number
}
