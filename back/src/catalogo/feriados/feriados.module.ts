import { Module } from '@nestjs/common';
import { FeriadosService } from './feriados.service';
import { FeriadosController } from './feriados.controller';
import { FeriadoRepository } from './repositories/feriado.repository';

@Module({
  controllers: [FeriadosController],
  providers: [FeriadosService, FeriadoRepository],
})
export class FeriadosModule {}
