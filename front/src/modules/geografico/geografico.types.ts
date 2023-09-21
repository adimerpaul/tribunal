export interface IMunicipio {
  id: number
  codigo: number
  codice: string
  descripcion: string
  idProvincia: number
  provincia: IProvincia
}

export interface IProvincia {
  id: number
  codigo: any
  codice: string
  departamento: IDepartamento
}

export interface IDepartamento {
  id: number
  descripcion: string
  idPais: number
}
