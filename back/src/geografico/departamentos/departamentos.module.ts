import { Module } from '@nestjs/common';
import { DepartamentosService } from './departamentos.service';
import { DepartamentosController } from './departamentos.controller';
import { DepartamentoRepository } from './repositories/departamento.repository';

@Module({
  controllers: [DepartamentosController],
  providers: [DepartamentosService, DepartamentoRepository],
  exports: [DepartamentoRepository, DepartamentosService],
})
export class DepartamentosModule {}
