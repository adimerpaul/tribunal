import { Inject, Injectable } from '@nestjs/common';
import { CiudadRepository } from './repositories/ciudad.repository';

@Injectable()
export class CiudadesService {
  constructor(
    @Inject(CiudadRepository)
    private readonly ciudadRepository: CiudadRepository,
  ) {}
  async findAll() {
    return await this.ciudadRepository.findAll();
  }

  async findOne(id: number) {
    return await this.ciudadRepository.findOneById(id);
  }
}
