import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { OficinaRepository } from './repositories/oficina.repository';

@Injectable()
export class OficinasService {
  constructor(
    @Inject(OficinaRepository)
    private readonly oficinaRepository: OficinaRepository,
  ) {}
  async findAll() {
    return await this.oficinaRepository.findAll();
  }

  async findOne(id: number) {
    const oficina = await this.oficinaRepository.findOneById(id);
    if (!oficina) throw new NotFoundException(' no existe');
    return oficina;
  }
}
