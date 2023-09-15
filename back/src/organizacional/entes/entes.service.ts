import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { EnteRepository } from './repositories/ente.repository';

@Injectable()
export class EntesService {
  constructor(
    @Inject(EnteRepository)
    private enteRepositorio: EnteRepository,
  ) {}

  async findAll() {
    return await this.enteRepositorio.findAll();
  }

  async findOne(id: number) {
    const ente = await this.enteRepositorio.findOneById(id);
    if (!ente) throw new NotFoundException(' No existe');
    return ente;
  }
}
