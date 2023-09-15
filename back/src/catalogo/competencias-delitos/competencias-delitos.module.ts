import { Module } from '@nestjs/common';
import { CompetenciasDelitosService } from './competencias-delitos.service';
import { CompetenciasDelitosController } from './competencias-delitos.controller';
import { CompetenciasDelitosRepository } from './repositories/competencia-delito.repository';

@Module({
  controllers: [CompetenciasDelitosController],
  providers: [CompetenciasDelitosService, CompetenciasDelitosRepository],
})
export class CompetenciasDelitosModule {}
