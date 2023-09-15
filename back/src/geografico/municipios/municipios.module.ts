import { Module } from '@nestjs/common';
import { MunicipiosService } from './municipios.service';
import { MunicipiosController } from './municipios.controller';
import { MunicipioRepository } from './repositories/municipio.repository';

@Module({
  controllers: [MunicipiosController],
  providers: [MunicipiosService, MunicipioRepository],
  exports: [MunicipiosService, MunicipioRepository],
})
export class MunicipiosModule {}
