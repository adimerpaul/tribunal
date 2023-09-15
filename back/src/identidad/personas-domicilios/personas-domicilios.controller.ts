import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePersonasDomicilioDto } from './dto/create-personas-domicilio.dto';
import { UpdatePersonasDomicilioDto } from './dto/update-personas-domicilio.dto';
import { PersonasDomiciliosService } from './personas-domicilios.service';

@Controller('personas-domicilios')
@ApiTags('[Identidad] - Personas Domicilios')
export class PersonasDomiciliosController {
  constructor(private readonly personasDomiciliosService: PersonasDomiciliosService) {}

  @Post()
  create(@Body() createPersonasDomicilioDto: CreatePersonasDomicilioDto) {
    return this.personasDomiciliosService.create(createPersonasDomicilioDto);
  }

  @Get()
  findAll() {
    return this.personasDomiciliosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personasDomiciliosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonasDomicilioDto: UpdatePersonasDomicilioDto) {
    return this.personasDomiciliosService.update(+id, updatePersonasDomicilioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personasDomiciliosService.remove(+id);
  }
}
