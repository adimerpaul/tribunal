export type AccionPermiso = 'CREATE' | 'READ' | 'UPDATED' | 'DELETE'

export interface ITipoAudiencia {
  id?: number
  index?: number
  codigo: number
  descripcion: string
  sujetos: number
  incremento: number
  leyNormativa: string
  plazoMinimo: number
  plazoIntermedio: number
  plazoMaximo: number
  duracionMinima: number
  duracionMedia: number
  duracionMaxima: number
  accion?: AccionPermiso
}
