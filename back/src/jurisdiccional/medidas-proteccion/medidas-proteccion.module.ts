import { Module } from '@nestjs/common';
import { MedidasProteccionService } from './medidas-proteccion.service';
import { MedidasProteccionController } from './medidas-proteccion.controller';

@Module({
  controllers: [MedidasProteccionController],
  providers: [MedidasProteccionService],
})
export class MedidasProteccionModule {}
