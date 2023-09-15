import { PartialType } from '@nestjs/swagger';
import { CreateActosProcesalesRespuestaDto } from './create-actos-procesales-respuesta.dto';

export class UpdateActosProcesalesRespuestaDto extends PartialType(CreateActosProcesalesRespuestaDto) {}
