import { Module } from '@nestjs/common';
import { SalasAudienciasOficinasService } from './salas-audiencias-oficinas.service';
import { SalasAudienciasOficinasController } from './salas-audiencias-oficinas.controller';
import { SalaAudienciaOficinaRepository } from './repositories/salas-audiencias-oficinas.repository';

@Module({
  controllers: [SalasAudienciasOficinasController],
  providers: [SalasAudienciasOficinasService, SalaAudienciaOficinaRepository],
})
export class SalasAudienciasOficinasModule {}
