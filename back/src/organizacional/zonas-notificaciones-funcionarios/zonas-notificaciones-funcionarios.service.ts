import { Inject, Injectable } from '@nestjs/common';
import { ZonaNotificacionFuncionarioRepository } from './repositories/zona-notificacion-funcionario.repository';

@Injectable()
export class ZonasNotificacionesFuncionariosService {
  constructor(
    @Inject(ZonaNotificacionFuncionarioRepository)
    private readonly zonaNotificacionRepository: ZonaNotificacionFuncionarioRepository,
  ) {}
  async findAll() {
    return await this.zonaNotificacionRepository.findAll();
  }

  async findOne(id: number) {
    return await this.zonaNotificacionRepository.findOneById(id);
  }
}
