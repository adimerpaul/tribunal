import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePersonasJuridicaDto } from './dto/create-personas-juridica.dto';
import { UpdatePersonasJuridicaDto } from './dto/update-personas-juridica.dto';
import { PersonasJuridicasService } from './personas-juridicas.service';

@Controller('personas-juridicas')
@ApiTags('[Identidad] - Personas Jurídicas')
export class PersonasJuridicasController {
  constructor(private readonly personasJuridicasService: PersonasJuridicasService) {}

  @Post()
  create(@Body() createPersonasJuridicaDto: CreatePersonasJuridicaDto) {
    return this.personasJuridicasService.create(createPersonasJuridicaDto);
  }

  @Get()
  findAll() {
    return this.personasJuridicasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personasJuridicasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonasJuridicaDto: UpdatePersonasJuridicaDto) {
    return this.personasJuridicasService.update(+id, updatePersonasJuridicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personasJuridicasService.remove(+id);
  }
}
