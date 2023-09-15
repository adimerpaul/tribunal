import { PartialType } from '@nestjs/swagger';
import { CreateSujetosProcesalesPrivacionesLibertadeDto } from './create-sujetos-procesales-privaciones-libertade.dto';

export class UpdateSujetosProcesalesPrivacionesLibertadeDto extends PartialType(
  CreateSujetosProcesalesPrivacionesLibertadeDto,
) {}
