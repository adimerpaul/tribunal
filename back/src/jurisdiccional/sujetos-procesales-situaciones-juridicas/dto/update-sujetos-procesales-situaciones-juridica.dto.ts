import { PartialType } from '@nestjs/swagger';
import { CreateSujetosProcesalesSituacionesJuridicaDto } from './create-sujetos-procesales-situaciones-juridica.dto';

export class UpdateSujetosProcesalesSituacionesJuridicaDto extends PartialType(
  CreateSujetosProcesalesSituacionesJuridicaDto,
) {}
