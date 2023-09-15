import { Module } from '@nestjs/common';
import { AudienciasDetallesService } from './audiencias-detalles.service';
import { AudienciasDetallesController } from './audiencias-detalles.controller';

@Module({
  controllers: [AudienciasDetallesController],
  providers: [AudienciasDetallesService],
})
export class AudienciasDetallesModule {}
