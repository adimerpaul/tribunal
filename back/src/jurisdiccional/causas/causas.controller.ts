import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CausasService } from './causas.service';
import { CreateCausaDto } from './dto/create-causa.dto';
import { UpdateCausaDto } from './dto/update-causa.dto';

@Controller('causas')
@ApiTags('[Jurisdiccional] - Causas')
export class CausasController {
  constructor(private readonly causasService: CausasService) {}

  @Post()
  create(@Body() createCausaDto: CreateCausaDto) {
    return this.causasService.create(createCausaDto);
  }

  @Get()
  findAll() {
    return this.causasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.causasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCausaDto: UpdateCausaDto) {
    return this.causasService.update(+id, updateCausaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.causasService.remove(+id);
  }
}
