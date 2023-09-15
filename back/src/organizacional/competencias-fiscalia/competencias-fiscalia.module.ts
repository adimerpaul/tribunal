import { Module } from '@nestjs/common';
import { CompetenciasFiscaliaService } from './competencias-fiscalia.service';
import { CompetenciasFiscaliaController } from './competencias-fiscalia.controller';
import { CompetenciaFiscaliaRepository } from './repositories/competencia-fiscalia.repository';

@Module({
  controllers: [CompetenciasFiscaliaController],
  providers: [CompetenciasFiscaliaService, CompetenciaFiscaliaRepository],
})
export class CompetenciasFiscaliaModule {}
