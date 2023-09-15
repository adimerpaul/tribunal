export interface ICausa {
  id?: number
  //idCausaMp: number
  codigoUnico: string
  fechaHoraCreacion: string
  hechoZona: string
  hechoDireccion: string
  hechoLatitud: string
  hechoLongitud: string
  hechoReferenciaLugar: string
  hechoRelato: string
  hechoFechaHora: string
  hechoFechaHoraFin: string
  hechoFechaHoraAproximada: string
  denominacionCausa: string
  tags: string
  origen: string
  idOficinaFiscalia: number
  idMunicipioHecho: number
  idTipoDenuncia: number
  idTipoEstado: number
  idTipoEtapa: number
}
