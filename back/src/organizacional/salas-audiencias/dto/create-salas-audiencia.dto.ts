import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateSalasAudienciaDto {
  @IsNotEmpty({ message: 'La descripción no puede ser un campo vacío.' })
  @IsString({ message: 'El nombre debe ser de tipo cadena.' })
  @MaxLength(250, { message: 'La descripción no debe exceder los 250 caracteres' })
  @ApiProperty()
  readonly descripcion: string;

  @IsNotEmpty({ message: 'La ubicación no puede ser un campo vacío' })
  @IsString({ message: 'La ubicación debe ser de tipo cadena.' })
  @MaxLength(250, { message: 'La ubicación no debe exceder los 250 caracteres' })
  @ApiProperty()
  readonly ubicacion: string;

  @IsString({ message: 'La capacidad debe ser de tipo cadena' })
  @MaxLength(50, { message: 'La capacidad no debe exceder los 50 caracteres' })
  @ApiProperty()
  readonly capacidad: string;

  @IsString({ message: 'La dimensión debe ser de tipo cadena' })
  @MaxLength(50, { message: 'La capacidad no debe exceder los 50 caracteres' })
  @ApiProperty()
  readonly dimension: string;

  @IsBoolean()
  @ApiProperty()
  readonly esCamaraGesell: boolean;
}
