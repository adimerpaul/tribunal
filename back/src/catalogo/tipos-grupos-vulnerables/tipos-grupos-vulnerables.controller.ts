import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { TiposGruposVulnerablesService } from './tipos-grupos-vulnerables.service';

@Controller('tipos-grupos-vulnerables')
@ApiTags('[Catálogo] - Tipos Grupos Vulnerables')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class TiposGruposVulnerablesController {
  constructor(private readonly tipoGruposVulnerablesService: TiposGruposVulnerablesService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de Tipos Grupos Vulnerables',
    description: 'Retorna una lista de Tipos Grupos Vulnerables',
  })
  findAll() {
    return this.tipoGruposVulnerablesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un Tipo Grupo Vulnerable',
    description: 'Retorna un Tipo Grupo Vulnerable segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.tipoGruposVulnerablesService.findOne(+id);
  }
}
