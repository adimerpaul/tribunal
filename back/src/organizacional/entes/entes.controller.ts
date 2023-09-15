import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { BaseController } from 'src/common/helper/base/base-controller';
import { EntesService } from './entes.service';

@Controller('entes')
@UseGuards(JwtAuthGuard)
@ApiTags('[Organizacional] - Entes')
@ApiBearerAuth()
export class EntesController extends BaseController {
  constructor(private readonly enteService: EntesService) {
    super();
  }

  @Get()
  async findAll() {
    const result = await this.enteService.findAll();
    return result;
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.enteService.findOne(id);
  }
}
