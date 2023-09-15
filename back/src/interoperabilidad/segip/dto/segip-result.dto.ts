export class SegipResultDto {
  cedulaIdentidad: string;
  complemento: string;
  readonly nombres: string;
  readonly paterno: string;
  readonly materno: string;
  readonly apellidoEsposo?: string;
  readonly conyugue: string;
  fechaNacimiento: string;
  readonly paisNacimiento: string;
  readonly departamentoNacimiento: string;
  readonly provinciaNacimiento: string;
  readonly localidadNacimiento: string;
  readonly estadoCivil: string;
  readonly domicilio: string;
  readonly profesion: string;
  padre?: string;
  readonly madre: string;
  estado: number;
  mensaje: string;
  fotografia: string;
  pathFotografia: string;
  readonly procedencia?: string;
  readonly lugarExpedicion?: string;
  readonly tipoRegistro?: string;
  origen: string;
  constructor(estado: number, mensaje: string) {
    this.estado = estado;
    this.mensaje = mensaje;
  }
}
