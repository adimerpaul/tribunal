import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { CiudadesService } from './ciudades.service';

@Controller('ciudades')
@UseGuards(JwtAuthGuard)
@ApiTags('[Geográfico] - Ciudades')
@ApiBearerAuth()
export class CiudadesController {
  constructor(private readonly ciudadesService: CiudadesService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de ciudades',
    description: 'Retorna una lista de ciudades',
  })
  findAll() {
    return this.ciudadesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de una ciudad',
    description: 'Retorna una ciudad segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.ciudadesService.findOne(+id);
  }
}
