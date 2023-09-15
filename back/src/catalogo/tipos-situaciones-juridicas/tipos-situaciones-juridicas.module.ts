import { Module } from '@nestjs/common';
import { TiposSituacionesJuridicasService } from './tipos-situaciones-juridicas.service';
import { TiposSituacionesJuridicasController } from './tipos-situaciones-juridicas.controller';
import { TipoSituacionJuridicaRepository } from './repositories/tipo-situacion-juridica.repository';

@Module({
  controllers: [TiposSituacionesJuridicasController],
  providers: [TiposSituacionesJuridicasService, TipoSituacionJuridicaRepository],
})
export class TiposSituacionesJuridicasModule {}
