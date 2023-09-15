import { PartialType } from '@nestjs/swagger';
import { CreateMedidasProteccionDto } from './create-medidas-proteccion.dto';

export class UpdateMedidasProteccionDto extends PartialType(CreateMedidasProteccionDto) {}
