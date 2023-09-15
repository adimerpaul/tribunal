import { Module } from '@nestjs/common';
import { TiposActosProcesalesTiposAudienciasService } from './tipos-actos-procesales-tipos-audiencias.service';
import { TiposActosProcesalesTiposAudienciasController } from './tipos-actos-procesales-tipos-audiencias.controller';
import { TipoActoProcesalTipoAudienciaRepository } from './repositories/tipo-acto-procesal-tipo-audiencia.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TipoActoProcesalTipoAudienciaRepository])],
  controllers: [TiposActosProcesalesTiposAudienciasController],
  providers: [TiposActosProcesalesTiposAudienciasService, TipoActoProcesalTipoAudienciaRepository],
  exports: [TiposActosProcesalesTiposAudienciasService],
})
export class TiposActosProcesalesTiposAudienciasModule {}
