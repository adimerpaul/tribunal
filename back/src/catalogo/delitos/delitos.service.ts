import { Inject, Injectable } from '@nestjs/common';
import { DelitoRepository } from './repositories/delito.repository';

@Injectable()
export class DelitosService {
  constructor(
    @Inject(DelitoRepository)
    private readonly delitoRepository: DelitoRepository,
  ) {}
  async findAll() {
    return await this.delitoRepository.findAll();
  }

  async findOne(id: number) {
    return await this.delitoRepository.findOneById(id);
  }
}
