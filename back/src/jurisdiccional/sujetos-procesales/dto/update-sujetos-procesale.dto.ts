import { PartialType } from '@nestjs/swagger';
import { CreateSujetosProcesaleDto } from './create-sujetos-procesale.dto';

export class UpdateSujetosProcesaleDto extends PartialType(CreateSujetosProcesaleDto) {}
