import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { AreasOrganizacionalesService } from './areas-organizacionales.service';

@Controller('areas-organizacionales')
@UseGuards(JwtAuthGuard)
@ApiTags('[Organizacional] - Áreas Organizacionales')
@ApiBearerAuth()
export class AreasOrganizacionalesController {
  constructor(private readonly areaOrganizacionalService: AreasOrganizacionalesService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de AreasOrganizacionales',
    description: 'Retorna una lista de AreasOrganizacionales',
  })
  findAll() {
    return this.areaOrganizacionalService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de una AreasOrganizacionales',
    description: 'Retorna una AreasOrganizacionales segun al id',
  })
  findOne(@Param('id') id: number) {
    return this.areaOrganizacionalService.findOne(+id);
  }
}
