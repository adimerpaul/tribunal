import { Module } from '@nestjs/common';
import { TiposGradosDiscapacidadesService } from './tipos-grados-discapacidades.service';
import { TiposGradosDiscapacidadesController } from './tipos-grados-discapacidades.controller';
import { TipoGradoDiscapacidadRepository } from './repositories/tipo-grado-discapacidad.repository';

@Module({
  controllers: [TiposGradosDiscapacidadesController],
  providers: [TiposGradosDiscapacidadesService, TipoGradoDiscapacidadRepository],
})
export class TiposGradosDiscapacidadesModule {}
