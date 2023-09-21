export type AccionPermiso = 'CREATE' | 'READ' | 'UPDATED' | 'DELETE'

export interface IOficina {
  id?: number
  index?: number
  idMunicipio: number
  descripcion: string
  edificio: string
  direccion: string
  idEnte: number
  telefonos: string
  latitud: string
  longitud: string
  accion?: AccionPermiso
}
