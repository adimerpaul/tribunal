import { Module } from '@nestjs/common';
import { TiposDenunciasService } from './tipos-denuncias.service';
import { TiposDenunciasController } from './tipos-denuncias.controller';
import { TipoDenunciaRepository } from './repositories/tipo-denuncia.repository';

@Module({
  controllers: [TiposDenunciasController],
  providers: [TiposDenunciasService, TipoDenunciaRepository],
})
export class TiposDenunciasModule {}
