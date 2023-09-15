import { Module } from '@nestjs/common';
import { TiposNivelEducacionService } from './tipos-nivel-educacion.service';
import { TiposNivelEducacionController } from './tipos-nivel-educacion.controller';
import { TipoNivelEducacionRepository } from './repositories/tipo-nivel-educacion.repository';

@Module({
  controllers: [TiposNivelEducacionController],
  providers: [TiposNivelEducacionService, TipoNivelEducacionRepository],
})
export class TiposNivelEducacionModule {}
