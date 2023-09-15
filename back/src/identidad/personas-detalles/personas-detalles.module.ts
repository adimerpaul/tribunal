import { Module } from '@nestjs/common';
import { PersonasDetallesService } from './personas-detalles.service';
import { PersonasDetallesController } from './personas-detalles.controller';

@Module({
  controllers: [PersonasDetallesController],
  providers: [PersonasDetallesService],
})
export class PersonasDetallesModule {}
