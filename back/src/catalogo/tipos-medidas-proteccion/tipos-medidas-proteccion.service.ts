import { Inject, Injectable } from '@nestjs/common';
import { TipoMedidaProteccionRepository } from './repositories/tipo-medida-proteccion.repository';

@Injectable()
export class TiposMedidasProteccionService {
  constructor(
    @Inject(TipoMedidaProteccionRepository)
    private readonly tiposMedidasProteccionRepository: TipoMedidaProteccionRepository,
  ) {}
  async findAll() {
    return await this.tiposMedidasProteccionRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tiposMedidasProteccionRepository.findOneById(id);
  }
}
