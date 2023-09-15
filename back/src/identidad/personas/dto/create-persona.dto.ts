import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreatePersonaDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Tipo identidad no debe estar vacío' })
  // @IsNumber({}, { message: 'Tipo de identidad debe ser numérico' })
  idTipoIdentidad: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Tipo documento de indentidad no debe esar vacio' })
  @IsString({ message: 'Tipo de documento debe ser tipo cadena' })
  tipoDocumentoIdentidad: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Docuento de identidad debe estar vacio' })
  @IsString({ message: 'Documento de identidad debe ser cadena' })
  documentoIdentidad: string;

  complemento?: string | null;

  idLugarExpedicion?: number | null;

  @ApiProperty()
  @IsNotEmpty({ message: 'Nombres no debe estar vacio' })
  @IsString({ message: 'Nombre de persona debe ser de tipo cadena' })
  nombres: string;

  @ApiProperty()
  @IsString({ message: 'Apellido materno debe ser tipo cadena' })
  primerApellido?: string | null;

  @ApiProperty()
  @IsString({ message: 'Segundo apellido debe ser tipo cadena' })
  segundoApellido?: string | null;

  fechaNacimiento?: string | null;

  idNacionalidad?: number | null;

  idMunicipioNacimiento?: number | null;

  idEstadoCivil?: number | null;

  sexo: string | null;

  @IsNotEmpty({ message: 'Identificador de persona no debe ser vacío' })
  estaFallecido: boolean;

  @IsNotEmpty({ message: 'Es ciudadano digital' })
  esCiudadanoDigital?: boolean | null;

  @IsOptional()
  @ApiProperty({ default: 'Abogado' })
  @IsString({ message: 'La Profesión/Ocupación debe ser de tipo cadena' })
  @MaxLength(250, {
    message: 'La profesionOcupacion excede los 250 caracteres',
  })
  profesionOcupacion?: string | null;

  @IsOptional()
  @ApiProperty({ default: '/uploads/persona/1234567.jpg' })
  @IsString({
    message: 'La url de almacenamiento de la fotografia debe ser de tipo cadena',
  })
  @MaxLength(40, {
    message: 'La url de almacenamiento de la fotografia excede los 250 caracteres',
  })
  fotografia?: string | null;
}
