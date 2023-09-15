import { Injectable } from '@nestjs/common';
import { CreateCausaDelitoDto } from './dto/create-causa-delito.dto';
import { UpdateCausaDelitoDto } from './dto/update-causa-delito.dto';

@Injectable()
export class CausaDelitosService {
  create(createCausaDelitoDto: CreateCausaDelitoDto) {
    return 'This action adds a new causaDelito';
  }

  findAll() {
    return `This action returns all causaDelitos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} causaDelito`;
  }

  update(id: number, updateCausaDelitoDto: UpdateCausaDelitoDto) {
    return `This action updates a #${id} causaDelito`;
  }

  remove(id: number) {
    return `This action removes a #${id} causaDelito`;
  }
}
