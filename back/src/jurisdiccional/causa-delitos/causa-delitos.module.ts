import { Module } from '@nestjs/common';
import { CausaDelitosService } from './causa-delitos.service';
import { CausaDelitosController } from './causa-delitos.controller';

@Module({
  controllers: [CausaDelitosController],
  providers: [CausaDelitosService],
})
export class CausaDelitosModule {}
