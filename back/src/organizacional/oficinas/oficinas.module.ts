import { Module } from '@nestjs/common';
import { OficinasService } from './oficinas.service';
import { OficinasController } from './oficinas.controller';
import { OficinaRepository } from './repositories/oficina.repository';

@Module({
  controllers: [OficinasController],
  providers: [OficinasService, OficinaRepository],
})
export class OficinasModule {}
