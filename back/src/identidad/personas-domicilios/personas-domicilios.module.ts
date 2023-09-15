import { Module } from '@nestjs/common';
import { PersonasDomiciliosService } from './personas-domicilios.service';
import { PersonasDomiciliosController } from './personas-domicilios.controller';

@Module({
  controllers: [PersonasDomiciliosController],
  providers: [PersonasDomiciliosService],
})
export class PersonasDomiciliosModule {}
