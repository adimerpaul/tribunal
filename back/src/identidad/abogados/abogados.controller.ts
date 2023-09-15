import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AbogadosService } from './abogados.service';
import { CreateAbogadoDto } from './dto/create-abogado.dto';
import { UpdateAbogadoDto } from './dto/update-abogado.dto';

@Controller('abogados')
@ApiTags('[Identidad] - Abogados')
export class AbogadosController {
  constructor(private readonly abogadosService: AbogadosService) {}

  @Post()
  create(@Body() createAbogadoDto: CreateAbogadoDto) {
    return this.abogadosService.create(createAbogadoDto);
  }

  @Get()
  findAll() {
    return this.abogadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.abogadosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAbogadoDto: UpdateAbogadoDto) {
    return this.abogadosService.update(+id, updateAbogadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.abogadosService.remove(+id);
  }
}
