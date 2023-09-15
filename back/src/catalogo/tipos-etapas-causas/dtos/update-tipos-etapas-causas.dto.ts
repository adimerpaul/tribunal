import { PartialType } from '@nestjs/swagger';
import { CreateTiposEtapasCausasDto } from './create-tipos-etapas-causas.dto';

export class UpdateTiposEtapasCausasDto extends PartialType(CreateTiposEtapasCausasDto) {}
