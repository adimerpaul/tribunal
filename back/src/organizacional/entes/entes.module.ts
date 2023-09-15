import { Module } from '@nestjs/common';
import { EntesService } from './entes.service';
import { EntesController } from './entes.controller';
import { EnteRepository } from './repositories/ente.repository';

@Module({
  controllers: [EntesController],
  providers: [EntesService, EnteRepository],
})
export class EntesModule {}
