import { PartialType } from '@nestjs/swagger';
import { CreateTiposActosProcesalesTipoAudienciaDto } from './create-tipos-actos-procesales-tipos-audiencias.dto';

export class UpdateTiposActosProcesalesTipoAudienciaDto extends PartialType(CreateTiposActosProcesalesTipoAudienciaDto) {}
