import { Injectable } from '@nestjs/common';
import { CreateSujetosProcesalesPrivacionesLibertadeDto } from './dto/create-sujetos-procesales-privaciones-libertade.dto';
import { UpdateSujetosProcesalesPrivacionesLibertadeDto } from './dto/update-sujetos-procesales-privaciones-libertade.dto';

@Injectable()
export class SujetosProcesalesPrivacionesLibertadesService {
  create(createSujetosProcesalesPrivacionesLibertadeDto: CreateSujetosProcesalesPrivacionesLibertadeDto) {
    return 'This action adds a new sujetosProcesalesPrivacionesLibertade';
  }

  findAll() {
    return `This action returns all sujetosProcesalesPrivacionesLibertades`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sujetosProcesalesPrivacionesLibertade`;
  }

  update(id: number, updateSujetosProcesalesPrivacionesLibertadeDto: UpdateSujetosProcesalesPrivacionesLibertadeDto) {
    return `This action updates a #${id} sujetosProcesalesPrivacionesLibertade`;
  }

  remove(id: number) {
    return `This action removes a #${id} sujetosProcesalesPrivacionesLibertade`;
  }
}
