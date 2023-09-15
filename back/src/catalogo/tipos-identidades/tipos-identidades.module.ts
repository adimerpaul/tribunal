import { Module } from '@nestjs/common';
import { TiposIdentidadesService } from './tipos-identidades.service';
import { TiposIdentidadesController } from './tipos-identidades.controller';
import { TipoIdentidadRepository } from './repositories/tipo-identidad.repository';

@Module({
  controllers: [TiposIdentidadesController],
  providers: [TiposIdentidadesService, TipoIdentidadRepository],
})
export class TiposIdentidadesModule {}
