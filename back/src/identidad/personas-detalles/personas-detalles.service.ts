import { Injectable } from '@nestjs/common';
import { CreatePersonasDetalleDto } from './dto/create-personas-detalle.dto';
import { UpdatePersonasDetalleDto } from './dto/update-personas-detalle.dto';

@Injectable()
export class PersonasDetallesService {
  create(createPersonasDetalleDto: CreatePersonasDetalleDto) {
    return 'This action adds a new personasDetalle';
  }

  findAll() {
    return `This action returns all personasDetalles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personasDetalle`;
  }

  update(id: number, updatePersonasDetalleDto: UpdatePersonasDetalleDto) {
    return `This action updates a #${id} personasDetalle`;
  }

  remove(id: number) {
    return `This action removes a #${id} personasDetalle`;
  }
}
