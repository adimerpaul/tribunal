import { Module } from '@nestjs/common';
import { BienesService } from './bienes.service';
import { BienesController } from './bienes.controller';

@Module({
  controllers: [BienesController],
  providers: [BienesService],
})
export class BienesModule {}
