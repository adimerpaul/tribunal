import { Injectable } from '@nestjs/common';
import { CreateMedidasProteccionDto } from './dto/create-medidas-proteccion.dto';
import { UpdateMedidasProteccionDto } from './dto/update-medidas-proteccion.dto';

@Injectable()
export class MedidasProteccionService {
  create(createMedidasProteccionDto: CreateMedidasProteccionDto) {
    return 'This action adds a new medidasProteccion';
  }

  findAll() {
    return `This action returns all medidasProteccion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medidasProteccion`;
  }

  update(id: number, updateMedidasProteccionDto: UpdateMedidasProteccionDto) {
    return `This action updates a #${id} medidasProteccion`;
  }

  remove(id: number) {
    return `This action removes a #${id} medidasProteccion`;
  }
}
