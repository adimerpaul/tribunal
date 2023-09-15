import { Module } from '@nestjs/common';
import { ActosProcesalesAdjuntosService } from './actos-procesales-adjuntos.service';
import { ActosProcesalesAdjuntosController } from './actos-procesales-adjuntos.controller';

@Module({
  controllers: [ActosProcesalesAdjuntosController],
  providers: [ActosProcesalesAdjuntosService],
})
export class ActosProcesalesAdjuntosModule {}
