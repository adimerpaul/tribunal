import { PartialType } from '@nestjs/swagger';
import { CreateRepartoDto } from './create-reparto.dto';

export class UpdateRepartoDto extends PartialType(CreateRepartoDto) {}
