import { Controller, Get } from '@nestjs/common';
import { MateriasService } from './materias.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';

@Controller('materias')
@ApiTags('[Catálogo] - Materias')
export class MateriasController {
  constructor(private readonly materiasService: MateriasService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de Materias',
    description: 'Retorna una lista de Materias',
  })
  findAll() {
    return this.materiasService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de Materia',
    description: 'Retorna una Materia segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.materiasService.findOne(+id);
  }
}
