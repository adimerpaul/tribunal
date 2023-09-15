import { Injectable } from '@nestjs/common';
import { CreateSujetosProcesalesActosProcesaleDto } from './dto/create-sujetos-procesales-actos-procesale.dto';
import { UpdateSujetosProcesalesActosProcesaleDto } from './dto/update-sujetos-procesales-actos-procesale.dto';

@Injectable()
export class SujetosProcesalesActosProcesalesService {
  create(createSujetosProcesalesActosProcesaleDto: CreateSujetosProcesalesActosProcesaleDto) {
    return 'This action adds a new sujetosProcesalesActosProcesale';
  }

  findAll() {
    return `This action returns all sujetosProcesalesActosProcesales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sujetosProcesalesActosProcesale`;
  }

  update(id: number, updateSujetosProcesalesActosProcesaleDto: UpdateSujetosProcesalesActosProcesaleDto) {
    return `This action updates a #${id} sujetosProcesalesActosProcesale`;
  }

  remove(id: number) {
    return `This action removes a #${id} sujetosProcesalesActosProcesale`;
  }
}
