import { Module } from '@nestjs/common';
import { TiposAudienciasService } from './tipos-audiencias.service';
import { TiposAudienciasController } from './tipos-audiencias.controller';
import { TipoAudienciaRepository } from './repositories/tipo-audiencia.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoAudiencia } from './entities/tipos-audiencia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoAudiencia])],
  controllers: [TiposAudienciasController],
  providers: [TiposAudienciasService, TipoAudienciaRepository],
  exports: [TiposAudienciasService],
})
export class TiposAudienciasModule {}
