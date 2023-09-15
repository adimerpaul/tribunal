import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TipoNivelEducacionRepository } from './repositories/tipo-nivel-educacion.repository';

@Injectable()
export class TiposNivelEducacionService {
  constructor(
    @Inject(TipoNivelEducacionRepository)
    private readonly tipoNivelRepository: TipoNivelEducacionRepository,
  ) {}
  async findAll() {
    return await this.tipoNivelRepository.findAll();
  }

  async findOne(id: number) {
    const area = await this.tipoNivelRepository.findOneById(id);
    if (!area) throw new NotFoundException(' No existe');
    return area;
  }
}
