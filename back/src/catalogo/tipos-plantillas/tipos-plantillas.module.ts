import { Module } from '@nestjs/common';
import { TipoPlantillaService } from './tipos-plantillas.service';
import { TipoplantillaController } from './tipos-plantillas.controller';
import { TipoPlantillaRepository } from './repositories/tipo-plantilla.repository';

@Module({
  controllers: [TipoplantillaController],
  providers: [TipoPlantillaService, TipoPlantillaRepository],
})
export class TiposPlantillasModule {}
