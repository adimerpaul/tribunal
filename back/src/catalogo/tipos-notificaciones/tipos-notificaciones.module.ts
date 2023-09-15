import { Module } from '@nestjs/common';
import { TiposNotificacionesService } from './tipos-notificaciones.service';
import { TiposNotificacionesController } from './tipos-notificaciones.controller';
import { TipoNotificacionRepository } from './repositories/tipo-notificacion.repository';

@Module({
  controllers: [TiposNotificacionesController],
  providers: [TiposNotificacionesService, TipoNotificacionRepository],
})
export class TiposNotificacionesModule {}
