import { Module } from '@nestjs/common';
import { SalasAudienciasService } from './salas-audiencias.service';
import { SalasAudienciasController } from './salas-audiencias.controller';
import { SalaAudienciaRepository } from './repositories/salas-audiencias.repository';

@Module({
  controllers: [SalasAudienciasController],
  providers: [SalasAudienciasService, SalaAudienciaRepository],
})
export class SalasAudienciasModule {}
