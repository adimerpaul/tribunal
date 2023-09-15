import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'SECRE-SALA' })
  @IsNotEmpty({ message: 'El campo codigo no debe ser vacío' })
  @IsString({ message: 'El campo codigo debe ser de tipo cadena' })
  @MaxLength(30, { message: 'El campo codigo excede los 20 caracteres' })
  @MinLength(4, { message: 'El campo codigo es menor a 4 caracteres' })
  readonly codigo: string;

  @ApiProperty({ example: 'SECRE' })
  @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(30, { message: 'El campo nombre excede los 20 caracteres' })
  @MinLength(4, { message: 'El campo nombre es menor a 4 caracteres' })
  readonly nombre: string;

  @ApiProperty({ example: 'Secretaria de Sala' })
  @IsNotEmpty({ message: 'El campo descripcion  no debe ser vacío' })
  @IsString({ message: 'El campo descripcion  debe ser de tipo cadena' })
  @MaxLength(200, { message: 'El campo descripcion excede los 200 caracteres' })
  @MinLength(4, { message: 'El campo descripcion  es menor a 4 caracteres' })
  readonly descripcion: string;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber({}, { message: 'El campo nivel  debe ser de tipo numerico' })
  readonly nivel: number;
}
