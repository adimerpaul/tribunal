import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { TiposCargosFuncionariosService } from './tipos-cargos-funcionarios.service';

@Controller('tipos-cargos-funcionarios')
@ApiTags('[Catálogo] - Tipos Cargos Funcionarios')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class TiposCargosFuncionariosController {
  constructor(private readonly tiposCargosFuncionariosService: TiposCargosFuncionariosService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de Tipos de Cargos Funcionarios',
    description: 'Retorna una lista de Tipos de Cargos Funcionarios',
  })
  findAll() {
    return this.tiposCargosFuncionariosService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un Tipo de Cargo Funcionario',
    description: 'Retorna un Tipo de Cargo Funcionario segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.tiposCargosFuncionariosService.findOne(+id);
  }
}
