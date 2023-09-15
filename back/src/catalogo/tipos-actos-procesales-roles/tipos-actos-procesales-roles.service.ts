import { Inject, Injectable } from '@nestjs/common';
import { TipoActoProcesalRolRepository } from './repositories/tipo-acto-procesal-rol.repository';

@Injectable()
export class TiposActosProcesalesRolesService {
  constructor(
    @Inject(TipoActoProcesalRolRepository)
    private readonly tipoActoProcesalRolRepository: TipoActoProcesalRolRepository,
  ) {}

  async findAll() {
    return await this.tipoActoProcesalRolRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tipoActoProcesalRolRepository.findOneById(id);
  }
}
