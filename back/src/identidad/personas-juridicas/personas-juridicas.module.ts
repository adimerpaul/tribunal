import { Module } from '@nestjs/common';
import { PersonasJuridicasService } from './personas-juridicas.service';
import { PersonasJuridicasController } from './personas-juridicas.controller';

@Module({
  controllers: [PersonasJuridicasController],
  providers: [PersonasJuridicasService],
})
export class PersonasJuridicasModule {}
