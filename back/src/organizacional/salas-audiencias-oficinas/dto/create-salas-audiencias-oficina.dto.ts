import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateSalasAudienciasOficinaDto {
    @IsNumber()
    @ApiProperty()
    readonly idOficina: number;

    @IsNumber()
    @ApiProperty()
    readonly idSalaAudiencia: number;
}
