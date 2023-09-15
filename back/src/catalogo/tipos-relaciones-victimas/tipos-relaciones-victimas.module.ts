import { Module } from '@nestjs/common';
import { TiposRelacionesVictimasService } from './tipos-relaciones-victimas.service';
import { TiposRelacionesVictimasController } from './tipos-relaciones-victimas.controller';
import { TipoRelacionVictimaRepository } from './repositories/tipo-relacion-victima.repository';

@Module({
  controllers: [TiposRelacionesVictimasController],
  providers: [TiposRelacionesVictimasService, TipoRelacionVictimaRepository],
})
export class TiposRelacionesVictimasModule {}
