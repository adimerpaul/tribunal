import { Module } from '@nestjs/common';
import { RepartosService } from './repartos.service';
import { RepartosController } from './repartos.controller';

@Module({
  controllers: [RepartosController],
  providers: [RepartosService],
})
export class RepartosModule {}
