import { PartialType } from '@nestjs/swagger';
import { CreateOficinasEstadoDto } from './create-oficinas-estado.dto';

export class UpdateOficinasEstadoDto extends PartialType(CreateOficinasEstadoDto) {}
