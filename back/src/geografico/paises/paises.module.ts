import { Module } from '@nestjs/common';
import { PaisesService } from './paises.service';
import { PaisesController } from './paises.controller';
import { PaisRepository } from './repositories/pais.repository';

@Module({
  controllers: [PaisesController],
  providers: [PaisesService, PaisRepository],
  exports: [PaisesService, PaisRepository],
})
export class PaisesModule {}
