import { Module } from '@nestjs/common';
import { GruposDelitosService } from './grupos-delitos.service';
import { GruposDelitosController } from './grupos-delitos.controller';
import { GrupoDelitoRepository } from './repositories/grupo-delito.repository';

@Module({
  controllers: [GruposDelitosController],
  providers: [GruposDelitosService, GrupoDelitoRepository],
})
export class GruposDelitosModule {}
