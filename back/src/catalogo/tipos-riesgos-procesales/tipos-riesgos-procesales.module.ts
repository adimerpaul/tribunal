import { Module } from '@nestjs/common';
import { TiposRiesgosProcesalesService } from './tipos-riesgos-procesales.service';
import { TiposRiesgosProcesalesController } from './tipos-riesgos-procesales.controller';
import { TipoRiesgoProcesalRepository } from './repositories/tipo-riesgo-procesal.repository';

@Module({
  controllers: [TiposRiesgosProcesalesController],
  providers: [TiposRiesgosProcesalesService, TipoRiesgoProcesalRepository],
})
export class TiposRiesgosProcesalesModule {}
