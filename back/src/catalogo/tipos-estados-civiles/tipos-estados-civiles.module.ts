import { Module } from '@nestjs/common';
import { TiposEstadosCivilesService } from './tipos-estados-civiles.service';
import { TiposEstadosCivilesController } from './tipos-estados-civiles.controller';
import { TipoEstadoCivilRepository } from './repositories/tipo-estado-civil.repository';

@Module({
  controllers: [TiposEstadosCivilesController],
  providers: [TiposEstadosCivilesService, TipoEstadoCivilRepository],
  exports: [TiposEstadosCivilesService, TipoEstadoCivilRepository],
})
export class TiposEstadosCivilesModule {}
