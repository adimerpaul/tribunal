import { Module } from '@nestjs/common';
import { ProvinciasService } from './provincias.service';
import { ProvinciaController } from './provincias.controller';
import { ProvinciaRepository } from './repositories/provincia.repository';

@Module({
  controllers: [ProvinciaController],
  providers: [ProvinciasService, ProvinciaRepository],
})
export class ProvinciasModule {}
