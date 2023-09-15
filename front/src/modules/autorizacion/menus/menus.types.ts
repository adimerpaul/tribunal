export interface IMenu {
  id?: number
  nombre: string
  descripcion: string
  icono: string
  url: string
  ordenDespliegue: number
  idPadre?: number
}
