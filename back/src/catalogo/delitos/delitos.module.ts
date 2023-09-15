import { Module } from '@nestjs/common';
import { DelitosService } from './delitos.service';
import { DelitosController } from './delitos.controller';
import { DelitoRepository } from './repositories/delito.repository';

@Module({
  controllers: [DelitosController],
  providers: [DelitosService, DelitoRepository],
})
export class DelitosModule {}
