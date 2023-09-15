import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTipoAudienciaDto {
  @ApiProperty({ example: '' })
  @IsOptional()
  readonly codigo: number;

  @ApiProperty({ example: 'Apelación restringida' })
  @IsNotEmpty({ message: 'El campo descripción no debe ser vacío' })
  @IsString({ message: 'El campo descripción debe ser de tipo cadena' })
  @MaxLength(150, { message: 'El campo descripción excede los 150 caracteres' })
  @MinLength(6, { message: 'El campo descripción es menor a 6 caracteres' })
  readonly descripcion: string;

  @ApiProperty({ example: '5' })
  @IsNotEmpty({ message: 'El campo plazo mínimo no debe ser vacío' })
  @IsNumber()
  readonly plazoMinimo: number;

  @ApiProperty({ example: '15' })
  @IsNotEmpty({ message: 'El campo plazo intermedio no debe ser vacío' })
  @IsNumber()
  readonly plazoIntermedio: number;

  @ApiProperty({ example: '15' })
  @IsNotEmpty({ message: 'El campo plazo máximo no debe ser vacío' })
  @IsNumber()
  readonly plazoMaximo: number;

  @ApiProperty({ example: '60' })
  @IsNotEmpty({ message: 'El campo duración mínima no debe ser vacío' })
  @IsNumber()
  readonly duracionMinima: number;

  @ApiProperty({ example: '90' })
  @IsNotEmpty({ message: 'El campo duración media no debe ser vacío' })
  @IsNumber()
  readonly duracionMedia: number;

  @ApiProperty({ example: '120' })
  @IsNotEmpty({ message: 'El campo duración máxima no debe ser vacío' })
  @IsNumber()
  readonly duracionMaxima: number;

  @ApiProperty({ example: '1' })
  @IsNotEmpty({ message: 'El campo sujeto no debe ser vacío' })
  @IsNumber()
  readonly sujetos: number;

  @ApiProperty({ example: '15' })
  @IsNotEmpty({ message: 'El campo incremento no debe ser vacío' })
  @IsNumber()
  readonly incremento: number;

  @ApiProperty({ example: '406 CPP' })
  @IsNotEmpty({ message: 'El campo ley normativa  no debe ser vacío' })
  @IsString({ message: 'El campo ley normativa debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo descripcion excede los 100 caracteres' })
  @IsOptional()
  readonly leyNormativa: string;
}
