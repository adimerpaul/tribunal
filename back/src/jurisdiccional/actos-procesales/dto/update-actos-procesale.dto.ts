import { PartialType } from '@nestjs/swagger';
import { CreateActosProcesaleDto } from './create-actos-procesale.dto';

export class UpdateActosProcesaleDto extends PartialType(CreateActosProcesaleDto) {}
