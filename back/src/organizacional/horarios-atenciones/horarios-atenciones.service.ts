import { Inject, Injectable } from '@nestjs/common';
import { HorarioAtencionRepository } from './repositories/horario-atencion.repository';

@Injectable()
export class HorariosAtencionesService {
  constructor(
    @Inject(HorarioAtencionRepository)
    private readonly horarioAtencionRepository: HorarioAtencionRepository,
  ) {}
  async findAll() {
    return await this.horarioAtencionRepository.findAll();
  }

  async findOne(id: number) {
    return await this.horarioAtencionRepository.findOneById(id);
  }
}
