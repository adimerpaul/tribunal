import { Inject, Injectable } from '@nestjs/common';
import { RecintoPenitenciarioRepository } from './repositories/recintos.repository';

@Injectable()
export class RecintosPenitenciariosService {
  constructor(
    @Inject(RecintoPenitenciarioRepository)
    private readonly recintoPenitenciarioRepository: RecintoPenitenciarioRepository,
  ) {}
  async findAll() {
    return await this.recintoPenitenciarioRepository.findAll();
  }

  async findOne(id: number) {
    return await this.recintoPenitenciarioRepository.findOneById(id);
  }
}
