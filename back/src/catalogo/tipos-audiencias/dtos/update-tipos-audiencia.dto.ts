import { PartialType } from '@nestjs/swagger';
import { CreateTipoAudienciaDto } from './create-tipos-audiencias.dto';

export class UpdateTipoAudienciaDto extends PartialType(CreateTipoAudienciaDto) {}
