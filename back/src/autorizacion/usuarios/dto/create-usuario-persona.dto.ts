import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUsuarioPersonaDto {
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

  sexo: number | null;

  @IsNotEmpty({ message: 'Identificador de persona no debe ser vacío' })
  estaFallecido: boolean;

  @IsNotEmpty({ message: 'Es ciudadano digital' })
  esCiudadanoDigital?: boolean | null;

  // @ApiProperty()
  // // @IsNotEmpty({ message: 'Identificador de persona no debe ser vacío' })
  // @IsNumber({}, { message: 'Identificador de persona debe ser numérico' })
  // idPersona?: number | null;

  // @ApiProperty()
  // // @IsNotEmpty({ message: 'Nombre de usuario no debe ser vacío' })
  // @IsString({ message: 'Nombre de usuario debe ser de tipo cadena' })
  // // @MaxLength(20, { message: 'Nombre de usuario es muy largo' })
  // // @MinLength(6, { message: 'Nombre de usuario es muy corto' })
  // usuario: string;
}
