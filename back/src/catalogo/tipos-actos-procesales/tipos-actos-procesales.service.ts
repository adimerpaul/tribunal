import { Inject, Injectable } from '@nestjs/common';
import { TipoActoProcesalRepository } from './repositories/tipo-acto-procesal.repository';
import { CreateTipoActoProcesalDto } from './dto/create-tipo-acto-procesal.dto';

@Injectable()
export class TiposActosProcesalesService {
  constructor(
    @Inject(TipoActoProcesalRepository)
    private readonly tipoActoProcesalRepository: TipoActoProcesalRepository,
  ) {}

  async findAll() {
    return await this.tipoActoProcesalRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tipoActoProcesalRepository.findOneById(id);
  }

  async create(createTipoActoProcesal: CreateTipoActoProcesalDto) {
    return await this.tipoActoProcesalRepository.create(createTipoActoProcesal);
  }
  async remove(id: number) {
    return await this.tipoActoProcesalRepository.remove(id);
  }
}
