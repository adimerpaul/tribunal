import { Injectable } from '@nestjs/common';
import { CreateRepartoDto } from './dto/create-reparto.dto';
import { UpdateRepartoDto } from './dto/update-reparto.dto';

@Injectable()
export class RepartosService {
  create(createRepartoDto: CreateRepartoDto) {
    return 'This action adds a new reparto';
  }

  findAll() {
    return `This action returns all repartos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reparto`;
  }

  update(id: number, updateRepartoDto: UpdateRepartoDto) {
    return `This action updates a #${id} reparto`;
  }

  remove(id: number) {
    return `This action removes a #${id} reparto`;
  }
}
