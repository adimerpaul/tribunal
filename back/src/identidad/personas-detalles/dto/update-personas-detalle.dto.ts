import { PartialType } from '@nestjs/swagger';
import { CreatePersonasDetalleDto } from './create-personas-detalle.dto';

export class UpdatePersonasDetalleDto extends PartialType(CreatePersonasDetalleDto) {}
