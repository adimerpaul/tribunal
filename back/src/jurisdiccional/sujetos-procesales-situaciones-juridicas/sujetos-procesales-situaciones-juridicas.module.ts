import { Module } from '@nestjs/common';
import { SujetosProcesalesSituacionesJuridicasService } from './sujetos-procesales-situaciones-juridicas.service';
import { SujetosProcesalesSituacionesJuridicasController } from './sujetos-procesales-situaciones-juridicas.controller';

@Module({
  controllers: [SujetosProcesalesSituacionesJuridicasController],
  providers: [SujetosProcesalesSituacionesJuridicasService],
})
export class SujetosProcesalesSituacionesJuridicasModule {}
