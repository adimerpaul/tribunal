import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMedidasProteccionDto } from './dto/create-medidas-proteccion.dto';
import { UpdateMedidasProteccionDto } from './dto/update-medidas-proteccion.dto';
import { MedidasProteccionService } from './medidas-proteccion.service';

@Controller('medidas-proteccion')
@ApiTags('[Jurisdiccional] - Medias de Protección')
export class MedidasProteccionController {
  constructor(private readonly medidasProteccionService: MedidasProteccionService) {}

  @Post()
  create(@Body() createMedidasProteccionDto: CreateMedidasProteccionDto) {
    return this.medidasProteccionService.create(createMedidasProteccionDto);
  }

  @Get()
  findAll() {
    return this.medidasProteccionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medidasProteccionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedidasProteccionDto: UpdateMedidasProteccionDto) {
    return this.medidasProteccionService.update(+id, updateMedidasProteccionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medidasProteccionService.remove(+id);
  }
}
