import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { ProvinciasService } from './provincias.service';

@Controller('provincias')
@UseGuards(JwtAuthGuard)
@ApiTags('[Geográfico] - Provincias')
@ApiBearerAuth()
export class ProvinciaController {
  constructor(private readonly provinciaService: ProvinciasService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de provincias',
    description: 'Retorna una lista de provincias',
  })
  findAll() {
    return this.provinciaService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de una provincia',
    description: 'Retorna una provincia segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.provinciaService.findOne(+id);
  }
}
