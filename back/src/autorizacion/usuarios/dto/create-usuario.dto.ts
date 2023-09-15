import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty()
  // @IsNotEmpty({ message: 'Identificador de persona no debe ser vacío' })
  // @IsNumber({}, { message: 'Identificador de persona debe ser numérico' })
  idPersona: number;

  @ApiProperty()
  // @IsNotEmpty({ message: 'Nombre de usuario no debe ser vacío' })
  @IsString({ message: 'Nombre de usuario debe ser de tipo cadena' })
  @MaxLength(20, { message: 'Nombre de usuario es muy largo' })
  @MinLength(6, { message: 'Nombre de usuario es muy corto' })
  usuario: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Clave no debe ser vacío' })
  @IsString({ message: 'Clave debe ser de tipo cadena' })
  @MaxLength(400, { message: 'Clave es muy largo' })
  @MinLength(6, { message: 'Clave es muy corto' })
  clave: string;

  token?: string;

  refreshToken?: string;
}
