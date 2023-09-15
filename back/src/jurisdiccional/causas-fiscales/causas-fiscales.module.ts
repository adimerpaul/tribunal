import { Module } from '@nestjs/common';
import { CausasFiscalesService } from './causas-fiscales.service';
import { CausasFiscalesController } from './causas-fiscales.controller';

@Module({
  controllers: [CausasFiscalesController],
  providers: [CausasFiscalesService],
})
export class CausasFiscalesModule {}
