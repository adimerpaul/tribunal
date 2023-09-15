import { PartialType } from '@nestjs/swagger';
import { CreateNotificacionesPersonaleDto } from './create-notificaciones-personale.dto';

export class UpdateNotificacionesPersonaleDto extends PartialType(CreateNotificacionesPersonaleDto) {}
