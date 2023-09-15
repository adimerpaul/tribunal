import { Module } from '@nestjs/common';
import { NotificacionesPersonalesService } from './notificaciones-personales.service';
import { NotificacionesPersonalesController } from './notificaciones-personales.controller';

@Module({
  controllers: [NotificacionesPersonalesController],
  providers: [NotificacionesPersonalesService],
})
export class NotificacionesPersonalesModule {}
