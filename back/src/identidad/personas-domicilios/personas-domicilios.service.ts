import { Injectable } from '@nestjs/common';
import { CreatePersonasDomicilioDto } from './dto/create-personas-domicilio.dto';
import { UpdatePersonasDomicilioDto } from './dto/update-personas-domicilio.dto';

@Injectable()
export class PersonasDomiciliosService {
  create(createPersonasDomicilioDto: CreatePersonasDomicilioDto) {
    return 'This action adds a new personasDomicilio';
  }

  findAll() {
    return `This action returns all personasDomicilios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personasDomicilio`;
  }

  update(id: number, updatePersonasDomicilioDto: UpdatePersonasDomicilioDto) {
    return `This action updates a #${id} personasDomicilio`;
  }

  remove(id: number) {
    return `This action removes a #${id} personasDomicilio`;
  }
}
