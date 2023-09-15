import { Module } from '@nestjs/common';
import { CiudadesService } from './ciudades.service';
import { CiudadesController } from './ciudades.controller';
import { CiudadRepository } from './repositories/ciudad.repository';

@Module({
  controllers: [CiudadesController],
  providers: [CiudadesService, CiudadRepository],
})
export class CiudadesModule {}
