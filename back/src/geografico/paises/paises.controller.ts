import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { PaisesService } from './paises.service';

@Controller('paises')
@UseGuards(JwtAuthGuard)
@ApiTags('[Geográfico] - Países')
@ApiBearerAuth()
export class PaisesController {
  constructor(private readonly paisesService: PaisesService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de paises',
    description: 'Retorna una lista de paises',
  })
  findAll() {
    return this.paisesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un pais',
    description: 'Retorna un pais segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.paisesService.findOne(+id);
  }
}
