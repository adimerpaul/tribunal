import { Module } from '@nestjs/common';
import { TiposMedidasProteccionService } from './tipos-medidas-proteccion.service';
import { TiposMedidasProteccionController } from './tipos-medidas-proteccion.controller';
import { TipoMedidaProteccionRepository } from './repositories/tipo-medida-proteccion.repository';

@Module({
  controllers: [TiposMedidasProteccionController],
  providers: [TiposMedidasProteccionService, TipoMedidaProteccionRepository],
})
export class TiposMedidasProteccionModule {}
