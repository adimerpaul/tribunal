import { Injectable } from '@nestjs/common';
import { CreatePersonasIdiomaDto } from './dto/create-personas-idioma.dto';
import { UpdatePersonasIdiomaDto } from './dto/update-personas-idioma.dto';

@Injectable()
export class PersonasIdiomasService {
  create(createPersonasIdiomaDto: CreatePersonasIdiomaDto) {
    return 'This action adds a new personasIdioma';
  }

  findAll() {
    return `This action returns all personasIdiomas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personasIdioma`;
  }

  update(id: number, updatePersonasIdiomaDto: UpdatePersonasIdiomaDto) {
    return `This action updates a #${id} personasIdioma`;
  }

  remove(id: number) {
    return `This action removes a #${id} personasIdioma`;
  }
}
