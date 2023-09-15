import { Injectable } from '@nestjs/common';
import { CreateSujetosProcesaleDto } from './dto/create-sujetos-procesale.dto';
import { UpdateSujetosProcesaleDto } from './dto/update-sujetos-procesale.dto';

@Injectable()
export class SujetosProcesalesService {
  create(createSujetosProcesaleDto: CreateSujetosProcesaleDto) {
    return 'This action adds a new sujetosProcesale';
  }

  findAll() {
    return `This action returns all sujetosProcesales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sujetosProcesale`;
  }

  update(id: number, updateSujetosProcesaleDto: UpdateSujetosProcesaleDto) {
    return `This action updates a #${id} sujetosProcesale`;
  }

  remove(id: number) {
    return `This action removes a #${id} sujetosProcesale`;
  }
}
