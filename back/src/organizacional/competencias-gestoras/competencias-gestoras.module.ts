import { Module } from '@nestjs/common';
import { CompetenciasGestorasService } from './competencias-gestoras.service';
import { CompetenciasGestorasController } from './competencias-gestoras.controller';
import { CompetenciaGestoraRepository } from './repositories/competencia-gestora.repository';

@Module({
  controllers: [CompetenciasGestorasController],
  providers: [CompetenciasGestorasService, CompetenciaGestoraRepository],
})
export class CompetenciasGestorasModule {}
