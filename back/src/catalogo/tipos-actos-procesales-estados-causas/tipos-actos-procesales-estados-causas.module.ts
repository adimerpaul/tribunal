import { Module } from '@nestjs/common';
import { TiposActosProcesalesEstadosCausasService } from './tipos-actos-procesales-estados-causas.service';
import { TiposActosProcesalesEstadosCausasController } from './tipos-actos-procesales-estados-causas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoActoProcesalEstadoCausaRepository } from './repositories/tipo-acto-procesal-estado-causa.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TipoActoProcesalEstadoCausaRepository])],
  controllers: [TiposActosProcesalesEstadosCausasController],
  providers: [TiposActosProcesalesEstadosCausasService, TipoActoProcesalEstadoCausaRepository],
  exports: [TiposActosProcesalesEstadosCausasService],
})
export class TiposActosProcesalesEstadosCausasModule {}
