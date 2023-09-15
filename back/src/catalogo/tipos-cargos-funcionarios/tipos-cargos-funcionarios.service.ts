import { Inject, Injectable } from '@nestjs/common';
import { TipoCargoFuncionarioRepository } from './repositories/tipo-cargo-funcionario.repository';

@Injectable()
export class TiposCargosFuncionariosService {
  constructor(
    @Inject(TipoCargoFuncionarioRepository)
    private readonly tiposcargosfuncionariosRepository: TipoCargoFuncionarioRepository,
  ) {}
  async findAll() {
    return await this.tiposcargosfuncionariosRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tiposcargosfuncionariosRepository.findOneById(id);
  }
}
