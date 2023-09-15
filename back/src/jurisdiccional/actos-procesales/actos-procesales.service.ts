import { Injectable } from '@nestjs/common';
import { CreateActosProcesaleDto } from './dto/create-actos-procesale.dto';
import { UpdateActosProcesaleDto } from './dto/update-actos-procesale.dto';

@Injectable()
export class ActosProcesalesService {
  create(createActosProcesaleDto: CreateActosProcesaleDto) {
    return 'This action adds a new actosProcesale';
  }

  findAll() {
    return `This action returns all actosProcesales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} actosProcesale`;
  }

  update(id: number, updateActosProcesaleDto: UpdateActosProcesaleDto) {
    return `This action updates a #${id} actosProcesale`;
  }

  remove(id: number) {
    return `This action removes a #${id} actosProcesale`;
  }
}
