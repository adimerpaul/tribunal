import { Module } from '@nestjs/common';
import { TiposSujetosProcesalesService } from './tipos-sujetos-procesales.service';
import { TiposSujetosProcesalesController } from './tipos-sujetos-procesales.controller';
import { TipoSujetoprocesalRepository } from './repositories/tipo-sujeto-procesal.repository';

@Module({
  controllers: [TiposSujetosProcesalesController],
  providers: [TiposSujetosProcesalesService, TipoSujetoprocesalRepository],
})
export class TiposSujetosProcesalesModule {}
