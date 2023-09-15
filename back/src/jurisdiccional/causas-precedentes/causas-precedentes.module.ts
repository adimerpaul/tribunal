import { Module } from '@nestjs/common';
import { CausasPrecedentesService } from './causas-precedentes.service';
import { CausasPrecedentesController } from './causas-precedentes.controller';

@Module({
  controllers: [CausasPrecedentesController],
  providers: [CausasPrecedentesService],
})
export class CausasPrecedentesModule {}
