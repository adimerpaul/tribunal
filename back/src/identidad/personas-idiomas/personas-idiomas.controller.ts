import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePersonasIdiomaDto } from './dto/create-personas-idioma.dto';
import { UpdatePersonasIdiomaDto } from './dto/update-personas-idioma.dto';
import { PersonasIdiomasService } from './personas-idiomas.service';

@Controller('personas-idiomas')
@ApiTags('[Identidad] - Personas Idiomas')
export class PersonasIdiomasController {
  constructor(private readonly personasIdiomasService: PersonasIdiomasService) {}

  @Post()
  create(@Body() createPersonasIdiomaDto: CreatePersonasIdiomaDto) {
    return this.personasIdiomasService.create(createPersonasIdiomaDto);
  }

  @Get()
  findAll() {
    return this.personasIdiomasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personasIdiomasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonasIdiomaDto: UpdatePersonasIdiomaDto) {
    return this.personasIdiomasService.update(+id, updatePersonasIdiomaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personasIdiomasService.remove(+id);
  }
}
