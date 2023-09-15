import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { SalasAudienciasService } from './salas-audiencias.service';
import SalaAudiencia from './entities/sala-audiencia.entity';

@Controller('salas-audiencias')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('[Organizacional] - Salas de Audiencias')
export class SalasAudienciasController {
  constructor(private readonly salasAudienciasService: SalasAudienciasService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de Salas Audiencias',
    description: 'Retorna una lista de todas las Salas Audiencias',
  })
  findAll():Promise<SalaAudiencia[]> {
    return this.salasAudienciasService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obtiene la informacion de una Sala Audiencia',
    description: 'Retorna una Sala Audiencia según al id',
  })
  findOne(@Param('id') id: number):Promise<SalaAudiencia> {
    return this.salasAudienciasService.findOne(id);
  }
}
