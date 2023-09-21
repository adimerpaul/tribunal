export interface ITipoEstadoCivil {
  id?: number
  codigo: number
  descripcion: string
}
export interface IBaseCatalogo {
  id?: number
  codigo: number
  descripcion: string
}
export type ITipoDenuncia = IBaseCatalogo
export type ITipoEstado = IBaseCatalogo
export type ITipoEtapa = IBaseCatalogo
