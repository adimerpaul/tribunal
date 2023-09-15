import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateNotificacionesPersonaleDto } from './dto/create-notificaciones-personale.dto';
import { UpdateNotificacionesPersonaleDto } from './dto/update-notificaciones-personale.dto';
import { NotificacionesPersonalesService } from './notificaciones-personales.service';

@Controller('notificaciones-personales')
@ApiTags('[Jurisdiccional] - Notificaciones Personales')
export class NotificacionesPersonalesController {
  constructor(private readonly notificacionesPersonalesService: NotificacionesPersonalesService) {}

  @Post()
  create(@Body() createNotificacionesPersonaleDto: CreateNotificacionesPersonaleDto) {
    return this.notificacionesPersonalesService.create(createNotificacionesPersonaleDto);
  }

  @Get()
  findAll() {
    return this.notificacionesPersonalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificacionesPersonalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotificacionesPersonaleDto: UpdateNotificacionesPersonaleDto) {
    return this.notificacionesPersonalesService.update(+id, updateNotificacionesPersonaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificacionesPersonalesService.remove(+id);
  }
}
