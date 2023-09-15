import { Controller, Get, Param } from '@nestjs/common';
import { TiposActosProcesalesRolesService } from './tipos-actos-procesales-roles.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('tipos-actos-procesales-roles')
@ApiTags('[Catálogo] - Tipos Actos Procesales, Roles')
export class TiposActosProcesalesRolesController {
  constructor(private readonly tiposActosProcesalesRolesService: TiposActosProcesalesRolesService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de tipos actos procesales roles',
    description: 'retorna la lista de tipos actos procesalesroles',
  })
  findAll() {
    return this.tiposActosProcesalesRolesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obtiene informacion de un tipo acto procesal rol',
    description: 'retorna una tipo acto procesal rol',
  })
  findOne(@Param('id') id: string) {
    return this.tiposActosProcesalesRolesService.findOne(+id);
  }
}
