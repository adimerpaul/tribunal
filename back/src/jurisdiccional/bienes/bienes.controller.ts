import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BienesService } from './bienes.service';
import { CreateBieneDto } from './dto/create-biene.dto';
import { UpdateBieneDto } from './dto/update-biene.dto';

@Controller('bienes')
@ApiTags('[Jurisdiccional] - Bienes')
export class BienesController {
  constructor(private readonly bienesService: BienesService) {}

  @Post()
  create(@Body() createBieneDto: CreateBieneDto) {
    return this.bienesService.create(createBieneDto);
  }

  @Get()
  findAll() {
    return this.bienesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bienesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBieneDto: UpdateBieneDto) {
    return this.bienesService.update(+id, updateBieneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bienesService.remove(+id);
  }
}
