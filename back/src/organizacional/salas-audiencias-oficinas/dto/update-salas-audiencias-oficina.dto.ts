import { PartialType } from '@nestjs/swagger';
import { CreateSalasAudienciasOficinaDto } from './create-salas-audiencias-oficina.dto';

export class UpdateSalasAudienciasOficinaDto extends PartialType(CreateSalasAudienciasOficinaDto) {}
