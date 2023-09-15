import { Inject, Injectable } from '@nestjs/common';
import { TipoDenunciaRepository } from './repositories/tipo-denuncia.repository';

@Injectable()
export class TiposDenunciasService {
  constructor(
    @Inject(TipoDenunciaRepository)
    private readonly tiposDenunciaRepository: TipoDenunciaRepository,
  ) {}
  async findAll() {
    return await this.tiposDenunciaRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tiposDenunciaRepository.findOneById(id);
  }
}
