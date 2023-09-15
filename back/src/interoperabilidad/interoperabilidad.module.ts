import { Module } from '@nestjs/common';
import { SegipModule } from './segip/segip.module';

@Module({
  imports: [SegipModule],
})
export class InteroperabilidadModule {}
