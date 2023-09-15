import { Module } from '@nestjs/common';
import { CompetenciasTerritorialesService } from './competencias-territoriales.service';
import { CompetenciasTerritorialesController } from './competencias-territoriales.controller';
import { CompetenciaTerritorialRepository } from './repositories/competencia-territorial.repository';

@Module({
  controllers: [CompetenciasTerritorialesController],
  providers: [CompetenciasTerritorialesService, CompetenciaTerritorialRepository],
})
export class CompetenciasTerritorialesModule {}
