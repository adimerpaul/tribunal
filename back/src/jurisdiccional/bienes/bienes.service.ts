import { Injectable } from '@nestjs/common';
import { CreateBieneDto } from './dto/create-biene.dto';
import { UpdateBieneDto } from './dto/update-biene.dto';

@Injectable()
export class BienesService {
  create(createBieneDto: CreateBieneDto) {
    return 'This action adds a new biene';
  }

  findAll() {
    return `This action returns all bienes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biene`;
  }

  update(id: number, updateBieneDto: UpdateBieneDto) {
    return `This action updates a #${id} biene`;
  }

  remove(id: number) {
    return `This action removes a #${id} biene`;
  }
}
