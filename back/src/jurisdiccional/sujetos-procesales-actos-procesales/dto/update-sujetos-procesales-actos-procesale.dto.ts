import { PartialType } from '@nestjs/swagger';
import { CreateSujetosProcesalesActosProcesaleDto } from './create-sujetos-procesales-actos-procesale.dto';

export class UpdateSujetosProcesalesActosProcesaleDto extends PartialType(CreateSujetosProcesalesActosProcesaleDto) {}
