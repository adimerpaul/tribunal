import { Inject, Injectable } from '@nestjs/common';
import { TipoAudienciaRepository } from './repositories/tipo-audiencia.repository';
import { CreateTipoAudienciaDto } from './dtos/create-tipos-audiencias.dto';
import { UpdateTipoAudienciaDto } from './dtos/update-tipos-audiencia.dto';

@Injectable()
export class TiposAudienciasService {
  constructor(
    @Inject(TipoAudienciaRepository)
    private readonly tipoAudienciaRepository: TipoAudienciaRepository,
  ) {}

  create(createTipoAudienciaDto: CreateTipoAudienciaDto) {
    return this.tipoAudienciaRepository.create(createTipoAudienciaDto);
  }

  findAll() {
    return this.tipoAudienciaRepository.findAll();
  }

  findOne(id: number) {
    return this.tipoAudienciaRepository.findOneById(id);
  }
  async update(id: number, updateTipoAudienciaDto: UpdateTipoAudienciaDto) {
    return await this.tipoAudienciaRepository.update(id, updateTipoAudienciaDto);
  }

  async remove(id: number) {
    return await this.tipoAudienciaRepository.delete(id);
  }
}
