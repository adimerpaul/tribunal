export * from './autorizacion/login/login.types'

export interface IMenus {
  id: string
  nombre: string
  descripcion: string
  icono: string
  url: string
  ordenDespliegue: number
  idPadre: number
  subMenus: ISubMenu[]
}

export interface ISubMenu {
  id: string
  nombre: string
  descripcion: string
  icono: string
  url: string
  ordenDespliegue: number
  idPadre: number
}
