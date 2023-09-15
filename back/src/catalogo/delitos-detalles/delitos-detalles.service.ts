import { Inject, Injectable } from '@nestjs/common';
import { DelitosDetallesRepository } from './repositories/delitos-detalles.repository';

@Injectable()
export class DelitosDetallesService {
  constructor(
    @Inject(DelitosDetallesRepository)
    private readonly delitosDetallesRepository: DelitosDetallesRepository,
  ) {}
  async findAll() {
    return await this.delitosDetallesRepository.findAll();
  }

  async findOne(id: number) {
    return await this.delitosDetallesRepository.findOneById(id);
  }
}
