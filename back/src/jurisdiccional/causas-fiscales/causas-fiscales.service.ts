import { Injectable } from '@nestjs/common';
import { CreateCausasFiscaleDto } from './dto/create-causas-fiscale.dto';
import { UpdateCausasFiscaleDto } from './dto/update-causas-fiscale.dto';

@Injectable()
export class CausasFiscalesService {
  create(createCausasFiscaleDto: CreateCausasFiscaleDto) {
    return 'This action adds a new causasFiscale';
  }

  findAll() {
    return `This action returns all causasFiscales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} causasFiscale`;
  }

  update(id: number, updateCausasFiscaleDto: UpdateCausasFiscaleDto) {
    return `This action updates a #${id} causasFiscale`;
  }

  remove(id: number) {
    return `This action removes a #${id} causasFiscale`;
  }
}
