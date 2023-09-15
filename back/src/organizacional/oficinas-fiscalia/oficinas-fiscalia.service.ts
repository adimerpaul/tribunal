import { Inject, Injectable } from '@nestjs/common';
import { OficinaFiscaliaRepository } from './repositories/oficina-fiscalia.repository';

@Injectable()
export class OficinasFiscaliaService {
  constructor(
    @Inject(OficinaFiscaliaRepository)
    private readonly oficinaFiscaliaRepository: OficinaFiscaliaRepository,
  ) {}
  async findAll() {
    return await this.oficinaFiscaliaRepository.findAll();
  }

  async findOne(id: number) {
    return await this.oficinaFiscaliaRepository.findOneById(id);
  }
}
