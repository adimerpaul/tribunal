import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePermisoDto {
  @ApiProperty({ example: 'BACKEND || FRONTEND' })
  @IsNotEmpty({ message: 'El campo tipo no debe ser vacío' })
  @IsString({ message: 'El campo tipo debe ser de tipo cadena' })
  @MaxLength(8, { message: 'El campo tipo excede los 8 caracteres' })
  @MinLength(7, { message: 'El campo tipo es menor a 7 caracteres' })
  tipo: string;

  @ApiProperty({ example: '/api/v1/ruta' })
  @IsNotEmpty({ message: 'El path nombre no debe ser vacío' })
  @IsString({ message: 'El campo path debe ser de tipo cadena' })
  @MinLength(4, { message: 'El campo path es menor a 4 caracteres' })
  path: string;

  @ApiProperty({ example: 'GET, POST, PATCH, PUT, DELETE' })
  @IsNotEmpty({ message: 'El campo accion no debe ser vacío' })
  @IsString({ message: 'El campo accion debe ser de tipo cadena' })
  @MaxLength(20, { message: 'El campo accion excede los 8 caracteres' })
  @MinLength(2, { message: 'El campo accion es menor a 7 caracteres' })
  accion: string;
}
