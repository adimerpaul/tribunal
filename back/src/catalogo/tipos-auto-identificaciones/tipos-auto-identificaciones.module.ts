import { Module } from '@nestjs/common';
import { TiposAutoIdentificacionesService } from './tipos-auto-identificaciones.service';
import { TiposAutoIdentificacionesController } from './tipos-auto-identificaciones.controller';
import { TipoAutoIdentificacionRepository } from './repositories/tipo-auto-identificacion.repository';

@Module({
  controllers: [TiposAutoIdentificacionesController],
  providers: [TiposAutoIdentificacionesService, TipoAutoIdentificacionRepository],
})
export class TiposAutoIdentificacionesModule {}
