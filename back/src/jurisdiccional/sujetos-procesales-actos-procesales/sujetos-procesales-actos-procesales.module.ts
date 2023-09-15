import { Module } from '@nestjs/common';
import { SujetosProcesalesActosProcesalesService } from './sujetos-procesales-actos-procesales.service';
import { SujetosProcesalesActosProcesalesController } from './sujetos-procesales-actos-procesales.controller';

@Module({
  controllers: [SujetosProcesalesActosProcesalesController],
  providers: [SujetosProcesalesActosProcesalesService],
})
export class SujetosProcesalesActosProcesalesModule {}
