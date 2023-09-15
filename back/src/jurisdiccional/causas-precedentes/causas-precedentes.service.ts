import { Injectable } from '@nestjs/common';
import { CreateCausasPrecedenteDto } from './dto/create-causas-precedente.dto';
import { UpdateCausasPrecedenteDto } from './dto/update-causas-precedente.dto';

@Injectable()
export class CausasPrecedentesService {
  create(createCausasPrecedenteDto: CreateCausasPrecedenteDto) {
    return 'This action adds a new causasPrecedente';
  }

  findAll() {
    return `This action returns all causasPrecedentes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} causasPrecedente`;
  }

  update(id: number, updateCausasPrecedenteDto: UpdateCausasPrecedenteDto) {
    return `This action updates a #${id} causasPrecedente`;
  }

  remove(id: number) {
    return `This action removes a #${id} causasPrecedente`;
  }
}
