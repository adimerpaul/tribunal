import { Module } from '@nestjs/common';
import { SujetosProcesalesService } from './sujetos-procesales.service';
import { SujetosProcesalesController } from './sujetos-procesales.controller';

@Module({
  controllers: [SujetosProcesalesController],
  providers: [SujetosProcesalesService],
})
export class SujetosProcesalesModule {}
