import { Module } from '@nestjs/common';
import { TiposActosProcesalesEtapasCausasService } from './tipos-actos-procesales-etapas-causas.service';
import { TiposActosProcesalesEtapasCausasController } from './tipos-actos-procesales-etapas-causas.controller';
import { TipoActoProcesalEtapaCausaRepository } from './repositories/tipo-acto-procesal-etapa-causa.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TipoActoProcesalEtapaCausaRepository])],
  controllers: [TiposActosProcesalesEtapasCausasController],
  providers: [TiposActosProcesalesEtapasCausasService, TipoActoProcesalEtapaCausaRepository],
  exports: [TiposActosProcesalesEtapasCausasService],
})
export class TiposActosProcesalesEtapasCausasModule {}
