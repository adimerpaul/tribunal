import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTiposEtapasCausasDto {
    
    @IsNumber()
    @IsOptional()
    @ApiProperty()
    readonly codigo: number;

    @IsNotEmpty({ message: 'El campo descripción no debe ser vacío' })
    @IsString({ message: 'El campo descripción debe ser de tipo cadena' })
    @MaxLength(150, { message: 'El campo descripción excede los 150 caracteres' })
    @MinLength(6, { message: 'El campo descripción es menor a 6 caracteres' })
    @ApiProperty()
    readonly descripcion: string;

}
