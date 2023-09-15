import { Module } from '@nestjs/common';
import { AudienciasService } from './audiencias.service';
import { AudienciasController } from './audiencias.controller';

@Module({
  controllers: [AudienciasController],
  providers: [AudienciasService],
})
export class AudienciasModule {}
