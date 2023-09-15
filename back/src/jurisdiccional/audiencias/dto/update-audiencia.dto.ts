import { PartialType } from '@nestjs/swagger';
import { CreateAudienciaDto } from './create-audiencia.dto';

export class UpdateAudienciaDto extends PartialType(CreateAudienciaDto) {}
