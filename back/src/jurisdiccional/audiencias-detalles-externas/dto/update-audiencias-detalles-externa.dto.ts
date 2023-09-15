import { PartialType } from '@nestjs/swagger';
import { CreateAudienciasDetallesExternaDto } from './create-audiencias-detalles-externa.dto';

export class UpdateAudienciasDetallesExternaDto extends PartialType(CreateAudienciasDetallesExternaDto) {}
