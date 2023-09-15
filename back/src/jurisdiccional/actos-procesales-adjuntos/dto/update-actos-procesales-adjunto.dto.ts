import { PartialType } from '@nestjs/swagger';
import { CreateActosProcesalesAdjuntoDto } from './create-actos-procesales-adjunto.dto';

export class UpdateActosProcesalesAdjuntoDto extends PartialType(CreateActosProcesalesAdjuntoDto) {}
