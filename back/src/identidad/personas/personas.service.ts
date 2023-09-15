import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { DataSource } from 'typeorm';
import { PersonasRepository } from 'src/identidad/personas/repositories/personas.repository';
import Persona from 'src/identidad/personas/entities/persona.entity';

@Injectable()
export class PersonasService {
  constructor(
    private readonly personasRepository: PersonasRepository,
    private readonly dataSource: DataSource,
  ) {}

  async create(createPersonaDto: CreatePersonaDto): Promise<Persona> {
    return await this.dataSource.transaction(async transactionalEntityManager => {
      return await this.personasRepository.create(transactionalEntityManager, createPersonaDto);
    });
  }

  busquedaCi(ci: string): Promise<Persona> {
    const ciConComplemento = ci.split('-');
    const documentoIdentidad = ciConComplemento[0];
    const complemento = ciConComplemento.length > 1 ? ciConComplemento[1] : '';
    return this.personasRepository.findOneByCi(documentoIdentidad, complemento);
  }

  findAll() {
    return `This action returns all personas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} persona`;
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return `This action updates a #${id} persona`;
  }

  remove(id: number) {
    return `This action removes a #${id} persona`;
  }
}
