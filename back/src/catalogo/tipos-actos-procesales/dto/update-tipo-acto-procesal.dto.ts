import { PartialType } from '@nestjs/swagger';
import { CreateTipoActoProcesalDto } from './create-tipo-acto-procesal.dto';

export class UpdateTipoActoProcesalDto extends PartialType(
  CreateTipoActoProcesalDto,
) {}
