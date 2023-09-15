import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { CompetenciasOrganizacionalesService } from './competencias-organizacionales.service';

@Controller('competencias-organizacionales')
@UseGuards(JwtAuthGuard)
@ApiTags('[Organizacional] - Competencias Organizacionales')
@ApiBearerAuth()
export class CompetenciasOrganizacionalesController {
  constructor(private readonly competenciasOrganizacionalesService: CompetenciasOrganizacionalesService) {}
  @Get()
  async findAll() {
    const result = await this.competenciasOrganizacionalesService.findAll();
    return result;
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.competenciasOrganizacionalesService.findOne(id);
  }
}
