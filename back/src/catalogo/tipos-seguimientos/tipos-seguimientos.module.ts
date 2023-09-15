import { Module } from '@nestjs/common';
import { TiposSeguimientosService } from './tipos-seguimientos.service';
import { TiposSeguimientosController } from './tipos-seguimientos.controller';
import { TipoSeguimientoRepository } from './repositories/tipo-seguimiento.repository';

@Module({
  controllers: [TiposSeguimientosController],
  providers: [TiposSeguimientosService, TipoSeguimientoRepository],
})
export class TiposSeguimientosModule {}
