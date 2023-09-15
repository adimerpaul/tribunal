import { Module } from '@nestjs/common';
import { SujetosProcesalesDelitosService } from './sujetos-procesales-delitos.service';
import { SujetosProcesalesDelitosController } from './sujetos-procesales-delitos.controller';

@Module({
  controllers: [SujetosProcesalesDelitosController],
  providers: [SujetosProcesalesDelitosService],
})
export class SujetosProcesalesDelitosModule {}
