import { Module } from '@nestjs/common';
import { SubGruposDelitosController } from './subgrupos-delitos.controller';
import { SubGrupoDelitosService } from './subgrupos-delitos.service';
import { SubGrupoDelitoRepository } from './repositories/subgrupo-delito.repository';

@Module({
  controllers: [SubGruposDelitosController],
  providers: [SubGrupoDelitosService, SubGrupoDelitoRepository],
})
export class SubgruposDelitosModule {}
