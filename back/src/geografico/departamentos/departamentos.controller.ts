import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { DepartamentosService } from './departamentos.service';

@Controller('departamentos')
@UseGuards(JwtAuthGuard)
@ApiTags('[Geográfico] - Departamentos')
@ApiBearerAuth()
export class DepartamentosController {
  constructor(private readonly departamentosService: DepartamentosService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de departamentos',
    description: 'Retorna una lista de departamentos',
  })
  findAll() {
    return this.departamentosService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un departamento',
    description: 'Retorna una departamento segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.departamentosService.findOne(+id);
  }
}
