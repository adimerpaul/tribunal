import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AudienciasDetallesService } from './audiencias-detalles.service';
import { CreateAudienciasDetalleDto } from './dto/create-audiencias-detalle.dto';
import { UpdateAudienciasDetalleDto } from './dto/update-audiencias-detalle.dto';

@Controller('audiencias-detalles')
@ApiTags('[Jurisdiccional] - Audiencias Detalles')
export class AudienciasDetallesController {
  constructor(private readonly audienciasDetallesService: AudienciasDetallesService) {}

  @Post()
  create(@Body() createAudienciasDetalleDto: CreateAudienciasDetalleDto) {
    return this.audienciasDetallesService.create(createAudienciasDetalleDto);
  }

  @Get()
  findAll() {
    return this.audienciasDetallesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.audienciasDetallesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAudienciasDetalleDto: UpdateAudienciasDetalleDto) {
    return this.audienciasDetallesService.update(+id, updateAudienciasDetalleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.audienciasDetallesService.remove(+id);
  }
}
