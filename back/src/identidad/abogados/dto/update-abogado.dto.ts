import { PartialType } from '@nestjs/swagger';
import { CreateAbogadoDto } from './create-abogado.dto';

export class UpdateAbogadoDto extends PartialType(CreateAbogadoDto) {}
