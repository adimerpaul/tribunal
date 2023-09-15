import { Module } from '@nestjs/common';
import { DelitosDetallesService } from './delitos-detalles.service';
import { DelitosDetallesController } from './delitos-detalles.controller';
import { DelitosDetallesRepository } from './repositories/delitos-detalles.repository';

@Module({
  controllers: [DelitosDetallesController],
  providers: [DelitosDetallesService, DelitosDetallesRepository],
})
export class DelitosDetallesModule {}
