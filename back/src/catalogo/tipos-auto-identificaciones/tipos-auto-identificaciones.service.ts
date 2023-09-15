import { Inject, Injectable } from '@nestjs/common';
import { TipoAutoIdentificacionRepository } from './repositories/tipo-auto-identificacion.repository';

@Injectable()
export class TiposAutoIdentificacionesService {
  constructor(
    @Inject(TipoAutoIdentificacionRepository)
    private readonly tiposAutoIdentificaionesRepository: TipoAutoIdentificacionRepository,
  ) {}
  async findAll() {
    return await this.tiposAutoIdentificaionesRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tiposAutoIdentificaionesRepository.findOneById(id);
  }
}
