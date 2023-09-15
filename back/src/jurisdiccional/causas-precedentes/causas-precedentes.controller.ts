import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CausasPrecedentesService } from './causas-precedentes.service';
import { CreateCausasPrecedenteDto } from './dto/create-causas-precedente.dto';
import { UpdateCausasPrecedenteDto } from './dto/update-causas-precedente.dto';

@Controller('causas-precedentes')
@ApiTags('[Jurisdiccional] - Causas Precedentes')
export class CausasPrecedentesController {
  constructor(private readonly causasPrecedentesService: CausasPrecedentesService) {}

  @Post()
  create(@Body() createCausasPrecedenteDto: CreateCausasPrecedenteDto) {
    return this.causasPrecedentesService.create(createCausasPrecedenteDto);
  }

  @Get()
  findAll() {
    return this.causasPrecedentesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.causasPrecedentesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCausasPrecedenteDto: UpdateCausasPrecedenteDto) {
    return this.causasPrecedentesService.update(+id, updateCausasPrecedenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.causasPrecedentesService.remove(+id);
  }
}
