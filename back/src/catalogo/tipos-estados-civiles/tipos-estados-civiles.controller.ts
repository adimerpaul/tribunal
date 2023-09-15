import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { TiposEstadosCivilesService } from './tipos-estados-civiles.service';

@Controller('tipos-estados-civiles')
@ApiTags('[Catálogo] - Tipos Estados Civiles')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class TiposEstadosCivilesController {
  constructor(private readonly tipoEstadosCivilesService: TiposEstadosCivilesService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de Tipos Estados Civil',
    description: 'Retorna una lista de Tipos Estados Civil',
  })
  findAll() {
    return this.tipoEstadosCivilesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un Tipo Estado Civil',
    description: 'Retorna un Tipo Estado Civil segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.tipoEstadosCivilesService.findOne(+id);
  }
}
