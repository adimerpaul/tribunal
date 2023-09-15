import { Module } from '@nestjs/common';
import { TiposEstadosCausasService } from './tipos-estados-causas.service';
import { TiposEstadosCausasController } from './tipos-estados-causas.controller';
import { TipoEstadoCausaRepository } from './repositories/tipo-estado-causa.repository';

@Module({
  controllers: [TiposEstadosCausasController],
  providers: [TiposEstadosCausasService, TipoEstadoCausaRepository],
})
export class TiposEstadosCausasModule {}
