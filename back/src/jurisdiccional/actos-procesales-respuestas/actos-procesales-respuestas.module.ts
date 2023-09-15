import { Module } from '@nestjs/common';
import { ActosProcesalesRespuestasService } from './actos-procesales-respuestas.service';
import { ActosProcesalesRespuestasController } from './actos-procesales-respuestas.controller';

@Module({
  controllers: [ActosProcesalesRespuestasController],
  providers: [ActosProcesalesRespuestasService],
})
export class ActosProcesalesRespuestasModule {}
