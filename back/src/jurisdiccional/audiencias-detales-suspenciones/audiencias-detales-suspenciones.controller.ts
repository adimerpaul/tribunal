import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AudienciasDetalesSuspencionesService } from './audiencias-detales-suspenciones.service';
import { CreateAudienciasDetalesSuspencioneDto } from './dto/create-audiencias-detales-suspencione.dto';
import { UpdateAudienciasDetalesSuspencioneDto } from './dto/update-audiencias-detales-suspencione.dto';

@Controller('audiencias-detales-suspenciones')
@ApiTags('[Jurisdiccional] - Audiencias')
export class AudienciasDetalesSuspencionesController {
  constructor(private readonly audienciasDetalesSuspencionesService: AudienciasDetalesSuspencionesService) {}

  @Post()
  create(@Body() createAudienciasDetalesSuspencioneDto: CreateAudienciasDetalesSuspencioneDto) {
    return this.audienciasDetalesSuspencionesService.create(createAudienciasDetalesSuspencioneDto);
  }

  @Get()
  findAll() {
    return this.audienciasDetalesSuspencionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.audienciasDetalesSuspencionesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAudienciasDetalesSuspencioneDto: UpdateAudienciasDetalesSuspencioneDto,
  ) {
    return this.audienciasDetalesSuspencionesService.update(+id, updateAudienciasDetalesSuspencioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.audienciasDetalesSuspencionesService.remove(+id);
  }
}
