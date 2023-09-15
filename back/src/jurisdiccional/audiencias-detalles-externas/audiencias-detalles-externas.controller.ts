import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AudienciasDetallesExternasService } from './audiencias-detalles-externas.service';
import { CreateAudienciasDetallesExternaDto } from './dto/create-audiencias-detalles-externa.dto';
import { UpdateAudienciasDetallesExternaDto } from './dto/update-audiencias-detalles-externa.dto';

@Controller('audiencias-detalles-externas')
@ApiTags('[Jurisdiccional] - Audiencias Detalles Externas')
export class AudienciasDetallesExternasController {
  constructor(private readonly audienciasDetallesExternasService: AudienciasDetallesExternasService) {}

  @Post()
  create(@Body() createAudienciasDetallesExternaDto: CreateAudienciasDetallesExternaDto) {
    return this.audienciasDetallesExternasService.create(createAudienciasDetallesExternaDto);
  }

  @Get()
  findAll() {
    return this.audienciasDetallesExternasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.audienciasDetallesExternasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAudienciasDetallesExternaDto: UpdateAudienciasDetallesExternaDto) {
    return this.audienciasDetallesExternasService.update(+id, updateAudienciasDetallesExternaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.audienciasDetallesExternasService.remove(+id);
  }
}
