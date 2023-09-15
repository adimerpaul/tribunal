import { Inject, Injectable } from '@nestjs/common';
import { ZonaNotificacionRepository } from './repositories/zonas-notificaciones.repository';

@Injectable()
export class ZonasNotificacionesService {
  constructor(
    @Inject(ZonaNotificacionRepository)
    private readonly zonaNotificacionRepository: ZonaNotificacionRepository,
  ) {}
  async findAll() {
    return await this.zonaNotificacionRepository.findAll();
  }

  async findOne(id: number) {
    return await this.zonaNotificacionRepository.findOneById(id);
  }
}
