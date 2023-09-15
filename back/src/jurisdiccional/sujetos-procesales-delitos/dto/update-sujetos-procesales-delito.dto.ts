import { PartialType } from '@nestjs/swagger';
import { CreateSujetosProcesalesDelitoDto } from './create-sujetos-procesales-delito.dto';

export class UpdateSujetosProcesalesDelitoDto extends PartialType(CreateSujetosProcesalesDelitoDto) {}
