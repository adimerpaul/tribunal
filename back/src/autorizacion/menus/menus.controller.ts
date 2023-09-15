import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { MenusService } from './menus.service';

@ApiTags('[Autorización] - Menús')
@ApiBearerAuth()
@Controller('menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) { }

  @Post()
  @ApiOperation({ summary: 'Crea un menú.' })
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menusService.create(createMenuDto);
  }

  @Post('listar')
  @ApiOperation({ summary: 'Obtiene todos los menúes.' })
  @HttpCode(HttpStatus.OK)
  findAll(@Body() options: PaginationDto) {
    return this.menusService.findAll(options);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtiene un menú por identificador.' })
  findOne(@Param('id') id: number) {
    return this.menusService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Modifica un menú.' })
  update(@Param('id') id: number, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menusService.update(id, updateMenuDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Inhabilita un menú.' })
  remove(@Param('id') id: number) {
    return this.menusService.remove(id);
  }

  @Get('rol/:id')
  @ApiOperation({ summary: 'Muestra el menú con el Id de rol.' })
  findByIdRol(@Param('id') idRol: string) {
    return this.menusService.findByIdRol(+idRol);
  }
}
