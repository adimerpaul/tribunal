import { Module } from '@nestjs/common';
import { SujetosProcesalesAbogadosService } from './sujetos-procesales-abogados.service';
import { SujetosProcesalesAbogadosController } from './sujetos-procesales-abogados.controller';

@Module({
  controllers: [SujetosProcesalesAbogadosController],
  providers: [SujetosProcesalesAbogadosService],
})
export class SujetosProcesalesAbogadosModule {}
