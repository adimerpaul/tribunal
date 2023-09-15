import { Module } from '@nestjs/common';
import { OficinasEstadosService } from './oficinas-estados.service';
import { OficinasEstadosController } from './oficinas-estados.controller';
import { OficinaEstadoRepository } from './repositories/oficina-estado.repository';

@Module({
  controllers: [OficinasEstadosController],
  providers: [OficinasEstadosService, OficinaEstadoRepository],
})
export class OficinasEstadosModule {}
