import { Module } from '@nestjs/common';
import { TiposCargosFuncionariosService } from './tipos-cargos-funcionarios.service';
import { TiposCargosFuncionariosController } from './tipos-cargos-funcionarios.controller';
import { TipoCargoFuncionarioRepository } from './repositories/tipo-cargo-funcionario.repository';

@Module({
  controllers: [TiposCargosFuncionariosController],
  providers: [TiposCargosFuncionariosService, TipoCargoFuncionarioRepository],
})
export class TiposCargosFuncionariosModule {}
