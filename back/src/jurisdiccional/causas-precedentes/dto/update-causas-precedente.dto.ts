import { PartialType } from '@nestjs/swagger';
import { CreateCausasPrecedenteDto } from './create-causas-precedente.dto';

export class UpdateCausasPrecedenteDto extends PartialType(CreateCausasPrecedenteDto) {}
