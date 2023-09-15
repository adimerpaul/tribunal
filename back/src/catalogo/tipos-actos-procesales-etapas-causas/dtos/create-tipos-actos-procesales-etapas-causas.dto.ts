import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateTiposActosProcesalesEtapasCausasDto {
    @IsNumber()
    @ApiProperty()
    readonly idTipoActoProcesal: number;

    @IsNumber()
    @ApiProperty()
    readonly idTipoEtapa: number;
}
