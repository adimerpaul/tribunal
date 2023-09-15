import { Module } from '@nestjs/common';
import { ZonasNotificacionesService } from './zonas-notificaciones.service';
import { ZonasNotificacionesController } from './zonas-notificaciones.controller';
import { ZonaNotificacionRepository } from './repositories/zonas-notificaciones.repository';

@Module({
  controllers: [ZonasNotificacionesController],
  providers: [ZonasNotificacionesService, ZonaNotificacionRepository],
})
export class ZonasNotificacionesModule {}
