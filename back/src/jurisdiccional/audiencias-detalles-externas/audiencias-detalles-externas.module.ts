import { Module } from '@nestjs/common';
import { AudienciasDetallesExternasService } from './audiencias-detalles-externas.service';
import { AudienciasDetallesExternasController } from './audiencias-detalles-externas.controller';

@Module({
  controllers: [AudienciasDetallesExternasController],
  providers: [AudienciasDetallesExternasService],
})
export class AudienciasDetallesExternasModule {}
