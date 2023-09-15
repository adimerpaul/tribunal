import { Module } from '@nestjs/common';
import { MemorialesService } from './memoriales.service';
import { MemorialesController } from './memoriales.controller';

@Module({
  controllers: [MemorialesController],
  providers: [MemorialesService],
})
export class MemorialesModule {}
