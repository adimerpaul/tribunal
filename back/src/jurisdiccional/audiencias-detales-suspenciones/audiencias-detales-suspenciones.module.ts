import { Module } from '@nestjs/common';
import { AudienciasDetalesSuspencionesService } from './audiencias-detales-suspenciones.service';
import { AudienciasDetalesSuspencionesController } from './audiencias-detales-suspenciones.controller';

@Module({
  controllers: [AudienciasDetalesSuspencionesController],
  providers: [AudienciasDetalesSuspencionesService],
})
export class AudienciasDetalesSuspencionesModule {}
