import { Module } from '@nestjs/common';
import { HorariosAtencionesService } from './horarios-atenciones.service';
import { HorariosAtencionesController } from './horarios-atenciones.controller';
import { HorarioAtencionRepository } from './repositories/horario-atencion.repository';

@Module({
  controllers: [HorariosAtencionesController],
  providers: [HorariosAtencionesService, HorarioAtencionRepository],
})
export class HorariosAtencionesModule {}
