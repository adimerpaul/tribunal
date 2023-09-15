import { Inject, Injectable } from '@nestjs/common';
import { TipoSeguimientoRepository } from './repositories/tipo-seguimiento.repository';

@Injectable()
export class TiposSeguimientosService {
  constructor(
    @Inject(TipoSeguimientoRepository)
    private readonly tiposSeguimientosRepository: TipoSeguimientoRepository,
  ) {}
  async findAll() {
    return await this.tiposSeguimientosRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tiposSeguimientosRepository.findOneById(id);
  }
}
