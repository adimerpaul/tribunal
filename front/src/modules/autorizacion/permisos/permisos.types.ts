export type TipoPermiso = 'FRONTEND' | 'BACKEND'

export type AccionPermiso = 'CREATE' | 'READ' | 'UPDATED' | 'DELETE'

export interface IPermiso {
  id?: number
  index?: number
  tipo: TipoPermiso
  path: string
  accion?: AccionPermiso
}
