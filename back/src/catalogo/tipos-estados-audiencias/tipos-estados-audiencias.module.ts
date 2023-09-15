import { Module } from '@nestjs/common';
import { TiposEstadosAudienciasService } from './tipos-estados-audiencias.service';
import { TiposEstadosAudienciasController } from './tipos-estados-audiencias.controller';
import { TipoEstadoAudienciaRepository } from './repositories/tipo-estado-audiencia.repository';

@Module({
  controllers: [TiposEstadosAudienciasController],
  providers: [TiposEstadosAudienciasService, TipoEstadoAudienciaRepository],
})
export class TiposEstadosAudienciasModule {}
