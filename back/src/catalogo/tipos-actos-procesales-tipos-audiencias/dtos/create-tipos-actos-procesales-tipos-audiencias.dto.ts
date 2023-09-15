import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateTiposActosProcesalesTipoAudienciaDto {
    @IsNumber()
    @ApiProperty()
    readonly idTipoActoProcesal: number;

    @IsNumber()
    @ApiProperty()
    readonly idTipoAudiencia: number;
}
