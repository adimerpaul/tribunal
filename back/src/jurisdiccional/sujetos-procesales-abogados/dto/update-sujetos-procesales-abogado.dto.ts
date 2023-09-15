import { PartialType } from '@nestjs/swagger';
import { CreateSujetosProcesalesAbogadoDto } from './create-sujetos-procesales-abogado.dto';

export class UpdateSujetosProcesalesAbogadoDto extends PartialType(CreateSujetosProcesalesAbogadoDto) {}
