import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class SolicitudNombreDto {
  @ApiProperty({ example: 'juan carlos pedro' })
  @IsNotEmpty({ message: 'El campo nombres no debe ser vacío' })
  @IsString({ message: 'El campo nombres debe ser de tipo cadena' })
  @MaxLength(30, { message: 'El campo codigo excede los 30 caracteres' })
  @MinLength(2, { message: 'El campo codigo es menor a 2 caracteres' })
  readonly nombres: string;

  @ApiProperty({ example: 'perez' })
  @IsNotEmpty({ message: 'El campo apellidoPaterno no debe ser vacío' })
  @IsString({ message: 'El campo apellidoPaterno debe ser de tipo cadena' })
  @MaxLength(20, {
    message: 'El campo apellidoPaterno excede los 20 caracteres',
  })
  @MinLength(4, { message: 'El campo apellidoPaterno es menor a 4 caracteres' })
  readonly apellidoPaterno: string;
}
