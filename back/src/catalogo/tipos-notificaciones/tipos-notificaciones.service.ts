import { Inject, Injectable } from '@nestjs/common';
import { TipoNotificacionRepository } from './repositories/tipo-notificacion.repository';

@Injectable()
export class TiposNotificacionesService {
  constructor(
    @Inject(TipoNotificacionRepository)
    private readonly tiposNotificacionesRepository: TipoNotificacionRepository,
  ) {}
  async findAll() {
    return await this.tiposNotificacionesRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tiposNotificacionesRepository.findOneById(id);
  }
}
