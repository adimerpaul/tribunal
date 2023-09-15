import { Injectable } from '@nestjs/common';
import { CreatePersonasJuridicaDto } from './dto/create-personas-juridica.dto';
import { UpdatePersonasJuridicaDto } from './dto/update-personas-juridica.dto';

@Injectable()
export class PersonasJuridicasService {
  create(createPersonasJuridicaDto: CreatePersonasJuridicaDto) {
    return 'This action adds a new personasJuridica';
  }

  findAll() {
    return `This action returns all personasJuridicas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personasJuridica`;
  }

  update(id: number, updatePersonasJuridicaDto: UpdatePersonasJuridicaDto) {
    return `This action updates a #${id} personasJuridica`;
  }

  remove(id: number) {
    return `This action removes a #${id} personasJuridica`;
  }
}
