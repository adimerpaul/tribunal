import { PartialType } from '@nestjs/swagger';
import { CreateAudienciasDetalesSuspencioneDto } from './create-audiencias-detales-suspencione.dto';

export class UpdateAudienciasDetalesSuspencioneDto extends PartialType(CreateAudienciasDetalesSuspencioneDto) {}
