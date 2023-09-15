import { PartialType } from '@nestjs/swagger';
import { CreateAudienciasDetalleDto } from './create-audiencias-detalle.dto';

export class UpdateAudienciasDetalleDto extends PartialType(CreateAudienciasDetalleDto) {}
