import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { TiposNivelEducacionService } from './tipos-nivel-educacion.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';

@Controller('tipos-nivel-educacion')
@UseGuards(JwtAuthGuard)
@ApiTags('[Catalogo] - Niveles de Educacion')
@ApiBearerAuth()
export class TiposNivelEducacionController {
  constructor(private readonly tiposNivelEducacionService: TiposNivelEducacionService) {}
  @Get()
  @ApiOperation({
    summary: 'Lista de Niveles de Educacion',
    description: 'Retorna una lista de Niveles de Educacion',
  })
  findAll() {
    return this.tiposNivelEducacionService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de Niveles de Educacion',
    description: 'Retorna Niveles de Educacion segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.tiposNivelEducacionService.findOne(+id);
  }
}
