import { IsNotEmpty, IsNumberString, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Order } from './constantes';
import { Type } from 'class-transformer';
import { number } from 'joi';

export class PaginacionDto {
  @ApiProperty({
    type: Number,
    description: 'Página',
    required: false,
  })
  @IsNumberString()
  @IsOptional()
  pagina: number;

  @ApiProperty({
    type: Number,
    description: 'Límite',
    required: false,
  })
  @IsNumberString()
  @IsOptional()
  @Type(() => number)
  limite: number;

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  readonly filtro?: string;

  @ApiPropertyOptional()
  // @Expose({ name: 'orden' })
  @IsOptional()
  @IsString()
  readonly ordenRaw?: string;

  get descendente() {
    return this.ordenRaw?.startsWith('-');
  }
  get orden() {
    if(!this.ordenRaw) return undefined;
    return this.descendente ? this.ordenRaw.substring(1) : this.ordenRaw;
  }

  get sentido() {
    return this.descendente ? Order.DESC : Order.ASC;
  }

  get saltar(): number {
    return (this.pagina - 1) * this.limite;
  }
}
