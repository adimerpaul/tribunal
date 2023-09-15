import { Module } from '@nestjs/common';
import { TiposEtapasCausasService } from './tipos-etapas-causas.service';
import { TiposEtapasCausasController } from './tipos-etapas-causas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoEtapaCausaRepository } from './repositories/tipo-etapa-causa.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TipoEtapaCausaRepository])],
  controllers: [TiposEtapasCausasController],
  providers: [TiposEtapasCausasService, TipoEtapaCausaRepository],
  exports: [TiposEtapasCausasService],
})
export class TiposEtapasCausasModule {}
