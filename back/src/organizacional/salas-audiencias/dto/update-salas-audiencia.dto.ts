import { PartialType } from '@nestjs/swagger';
import { CreateSalasAudienciaDto } from './create-salas-audiencia.dto';

export class UpdateSalasAudienciaDto extends PartialType(CreateSalasAudienciaDto) {}
