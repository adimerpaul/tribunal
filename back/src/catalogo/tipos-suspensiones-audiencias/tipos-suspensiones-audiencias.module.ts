import { Module } from '@nestjs/common';
import { TiposSuspensionesAudienciasService } from './tipos-suspensiones-audiencias.service';
import { TiposSuspensionesAudienciasController } from './tipos-suspensiones-audiencias.controller';
import { TipoSuspensionAudienciaRepository } from './repositories/tipo-suspension-audiencia.repository';

@Module({
  controllers: [TiposSuspensionesAudienciasController],
  providers: [TiposSuspensionesAudienciasService, TipoSuspensionAudienciaRepository],
})
export class TiposSuspensionesAudienciasModule {}
