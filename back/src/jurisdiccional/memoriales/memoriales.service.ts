import { Injectable } from '@nestjs/common';
import { CreateMemorialeDto } from './dto/create-memoriale.dto';
import { UpdateMemorialeDto } from './dto/update-memoriale.dto';

@Injectable()
export class MemorialesService {
  create(createMemorialeDto: CreateMemorialeDto) {
    return 'This action adds a new memoriale';
  }

  findAll() {
    return `This action returns all memoriales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} memoriale`;
  }

  update(id: number, updateMemorialeDto: UpdateMemorialeDto) {
    return `This action updates a #${id} memoriale`;
  }

  remove(id: number) {
    return `This action removes a #${id} memoriale`;
  }
}
