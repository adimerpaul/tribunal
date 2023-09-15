import { Module } from '@nestjs/common';
import { MateriasService } from './materias.service';
import { MateriasController } from './materias.controller';
import { MateriaRepository } from './repositories/materia.repository';

@Module({
  controllers: [MateriasController],
  providers: [MateriasService, MateriaRepository],
})
export class MateriasModule {}
