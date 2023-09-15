import { PartialType } from '@nestjs/swagger';
import { CreateZonasNotificacioneDto } from './create-zonas-notificacione.dto';

export class UpdateZonasNotificacioneDto extends PartialType(CreateZonasNotificacioneDto) {}
