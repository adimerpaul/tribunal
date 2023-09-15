import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateRepartoDto } from './dto/create-reparto.dto';
import { UpdateRepartoDto } from './dto/update-reparto.dto';
import { RepartosService } from './repartos.service';

@Controller('repartos')
@ApiTags('[Jurisdiccional] - Repartos')
export class RepartosController {
  constructor(private readonly repartosService: RepartosService) {}

  @Post()
  create(@Body() createRepartoDto: CreateRepartoDto) {
    return this.repartosService.create(createRepartoDto);
  }

  @Get()
  findAll() {
    return this.repartosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.repartosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRepartoDto: UpdateRepartoDto) {
    return this.repartosService.update(+id, updateRepartoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.repartosService.remove(+id);
  }
}
