import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateMenuDto {
  @IsNotEmpty({ message: 'El nombre no debe ser vacío.' })
  @IsString({ message: 'El nombre debe ser de tipo cadena.' })
  @MaxLength(60, { message: 'El nombre excede los 60 caracteres' })
  @ApiProperty()
  readonly nombre: string;

  @IsNotEmpty({ message: 'La descripción no debe ser vacía.' })
  @IsString({ message: 'La descripción debe ser de tipo cadena.' })
  @MaxLength(250, { message: 'La descripción excede los 250 caracteres' })
  @ApiProperty()
  readonly descripcion: string;

  @IsNotEmpty({ message: 'El nombre del ícono no debe ser vacío.' })
  @IsString({ message: 'El nombre del ícono debe ser de tipo cadena.' })
  @MaxLength(50, { message: 'El nombre del ícono excede los 50 caracteres' })
  @ApiProperty()
  readonly icono: string;

  @IsNotEmpty({ message: 'La url no debe ser vacía.' })
  @IsString({ message: 'La url debe ser de tipo cadena.' })
  @MaxLength(50, { message: 'La url excede los 50 caracteres' })
  @ApiProperty()
  readonly url: string;

  @IsNotEmpty({ message: 'El orden de despliegue no debe ser vacío.' })
  @IsNumber({}, { message: 'La orden de despliegue debe ser de tipo numerico.' })
  @ApiProperty()
  readonly ordenDespliegue: number;

  @IsNotEmpty({ message: 'El identificador del menú padre no debe ser vacío.' })
  @IsNumber({}, { message: 'El identificador del menú padre debe ser de tipo numerico.' })
  @ApiProperty()
  readonly idPadre: number;
}
