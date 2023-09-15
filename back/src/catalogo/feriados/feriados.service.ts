import { Inject, Injectable } from '@nestjs/common';
import { FeriadoRepository } from './repositories/feriado.repository';

@Injectable()
export class FeriadosService {
  constructor(
    @Inject(FeriadoRepository)
    private readonly feriadoRepository: FeriadoRepository,
  ) {}
  async findAll() {
    return await this.feriadoRepository.findAll();
  }

  async findOne(id: number) {
    return await this.feriadoRepository.findOneById(id);
  }
}
