import { Module } from '@nestjs/common';
import { ActosProcesalesService } from './actos-procesales.service';
import { ActosProcesalesController } from './actos-procesales.controller';

@Module({
  controllers: [ActosProcesalesController],
  providers: [ActosProcesalesService],
})
export class ActosProcesalesModule {}
