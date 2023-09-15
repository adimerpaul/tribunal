import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { MunicipiosService } from './municipios.service';

@Controller('municipios')
@UseGuards(JwtAuthGuard)
@ApiTags('[Geográfico] - Municipios')
@ApiBearerAuth()
export class MunicipiosController {
  constructor(private readonly municipiosService: MunicipiosService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de municipios',
    description: 'Retorna una lista de municipios',
  })
  findAll() {
    return this.municipiosService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un municipio',
    description: 'Retorna un municipio segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.municipiosService.findOne(+id);
  }
}
