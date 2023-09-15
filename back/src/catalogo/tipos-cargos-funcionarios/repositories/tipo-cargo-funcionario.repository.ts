import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import TipoCargoFuncionario from '../entities/tipo-cargo-funcionario.entity';

@Injectable()
export class TipoCargoFuncionarioRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoCargoFuncionario[]> {
    return this.dataSource.getRepository(TipoCargoFuncionario).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoCargoFuncionario> {
    return this.dataSource.getRepository(TipoCargoFuncionario).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
