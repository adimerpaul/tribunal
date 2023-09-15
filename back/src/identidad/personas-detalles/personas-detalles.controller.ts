import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePersonasDetalleDto } from './dto/create-personas-detalle.dto';
import { UpdatePersonasDetalleDto } from './dto/update-personas-detalle.dto';
import { PersonasDetallesService } from './personas-detalles.service';

@Controller('personas-detalles')
@ApiTags('[Identidad] - Personas Detalles')
export class PersonasDetallesController {
  constructor(private readonly personasDetallesService: PersonasDetallesService) {}

  @Post()
  create(@Body() createPersonasDetalleDto: CreatePersonasDetalleDto) {
    return this.personasDetallesService.create(createPersonasDetalleDto);
  }

  @Get()
  findAll() {
    return this.personasDetallesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personasDetallesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonasDetalleDto: UpdatePersonasDetalleDto) {
    return this.personasDetallesService.update(+id, updatePersonasDetalleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personasDetallesService.remove(+id);
  }
}
