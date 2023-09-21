export type Accion = 'CREATE' | 'READ' | 'UPDATED' | 'DELETE'

export interface ISalasAudiencia {
  id?: number
  index?: number
  descripcion: string
  ubicacion: string
  capacidad: string
  dimension: string
  esCamaraGesell: boolean
  accion?: Accion
}
