import { Module } from '@nestjs/common';
import { SujetosProcesalesPrivacionesLibertadesService } from './sujetos-procesales-privaciones-libertades.service';
import { SujetosProcesalesPrivacionesLibertadesController } from './sujetos-procesales-privaciones-libertades.controller';

@Module({
  controllers: [SujetosProcesalesPrivacionesLibertadesController],
  providers: [SujetosProcesalesPrivacionesLibertadesService],
})
export class SujetosProcesalesPrivacionesLibertadesModule {}
