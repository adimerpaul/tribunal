import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTipoActoProcesalDto {
  //id: number;
  @ApiProperty({
    type: Number,
    description: 'Identificador de la categoria',
    required: true,
  })
  //@IsNotEmpty({ message: 'El campo idCategoria no debe ser vacio.' })
  @IsNumber({}, { message: 'El campo idCategoria  debe ser de tipo numerico.' })
  idCategoria: number;

  @ApiProperty({
    type: Number,
    description: 'codigo del tipo acto procesal',
    required: true,
  })
  //@IsNotEmpty({ message: 'El campo codigo no debe ser vacio.' })
  @IsNumber({}, { message: 'El campo codigo  debe ser de tipo numerico.' })
  codigo: number;

  @ApiProperty({
    type: String,
    description: 'descripción del tipo acto procesal.',
    required: false,
  })
  @IsString({ message: 'El campo descripcion debe ser de tipo cadena.' })
  @MaxLength(150, {
    message: 'El campo descripcion excede los 150 caracteres.',
  })
  @MinLength(4, { message: 'El campo codigo es menor a 4 caracteres.' })
  descripcion: string;

  @ApiProperty({
    type: Number,
    description: 'Plazo resolución del tipo acto procesal.',
    required: false,
  })
  @IsNumber({}, { message: 'El campo plazo resolución  debe ser de tipo numerico.' })
  plazoResolucion: number;

  @ApiProperty({
    type: Number,
    description: 'Plazo resolución unidad del tipo acto procesal.',
    required: false,
  })
  @IsNumber({}, { message: 'El campo plazo resolución unidad  debe ser de tipo númerico.' })
  plazoResolucionUnidad: number;

  @ApiProperty({
    type: Boolean,
    description: 'Plazo continuo del tipo acto procesal.',
    required: true,
  })
  @IsBoolean()
  plazoContinuo: boolean;

  @ApiProperty({
    type: Boolean,
    description: 'Plazo común del tipo acto procesal.',
    required: true,
  })
  @IsBoolean()
  plazoComun: boolean;

  @ApiProperty({
    type: Number,
    description: 'Plazo suspensión del tipo acto procesal.',
    required: true,
  })
  //@IsNotEmpty({ message: 'El campo plazo suspención no debe ser vacio.' })
  @IsNumber({}, { message: 'El campo plazo suspención  debe ser de tipo numerico.' })
  plazoSuspencion: number;

  @ApiProperty({
    type: Number,
    description: 'Visibilidad del tipo acto procesal.',
    required: true,
  })
  //@IsNotEmpty({ message: 'El campo plazo suspención no debe ser vacio.' })
  @IsNumber({}, { message: 'El campo visibilidad  debe ser de tipo numerico.' })
  visibilidad: number;

  @ApiProperty({
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  unicoCausa: boolean;

  @ApiProperty({
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  unicoSujetoProcesal: boolean;

  @ApiProperty({
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  requiereRespuesta: boolean;

  @ApiProperty({
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  requiereAgendamiento: boolean;

  @ApiProperty({
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  requiereNotificacion: boolean;

  @ApiProperty({
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  requiereNotificacionPersonal: boolean;

  @ApiProperty({
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  requiereIndividualizacionSujetos: boolean;

  @ApiProperty({
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  requiereIndividualizacionDenunciantes: boolean;

  @ApiProperty({
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  requiereIndividualizacionDenunciados: boolean;

  @ApiProperty({
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  requiereAdjuntos: boolean;

  @ApiProperty({
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  conAdjuntos: boolean;

  @ApiProperty({
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  conPlantilla: boolean;

  @ApiProperty({
    type: Number,
    required: true,
  })
  //@IsNotEmpty({ message: 'El campo cantidadValidaciones no debe ser vacio.' })
  @IsNumber({}, { message: 'El campo cantidadValidaciones  debe ser de tipo numerico.' })
  cantidadValidaciones: number;

  @ApiProperty({
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  interoperable: boolean;

  @ApiProperty({
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  cambiaEstado: boolean;

  @ApiProperty({
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  cambiaEtapa: boolean;

  @ApiProperty({
    type: String,
    required: true,
  })
  //@IsNotEmpty({ message: 'El campo ambito no debe ser vacio.' })
  @IsString({ message: 'El campo ambito debe ser de tipo cadena.' })
  @MaxLength(10, {
    message: 'El campo ambito excede los 10 caracteres.',
  })
  @MinLength(4, { message: 'El campo ambito es menor a 2 caracteres.' })
  ambito: string;
}
