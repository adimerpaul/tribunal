import { Module } from '@nestjs/common';
import { OficinasFiscaliaService } from './oficinas-fiscalia.service';
import { OficinasFiscaliaController } from './oficinas-fiscalia.controller';
import { OficinaFiscaliaRepository } from './repositories/oficina-fiscalia.repository';

@Module({
  controllers: [OficinasFiscaliaController],
  providers: [OficinasFiscaliaService, OficinaFiscaliaRepository],
})
export class OficinasFiscaliaModule {}
