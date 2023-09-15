import { Injectable } from '@nestjs/common';
import { CreateNotificacionesPersonaleDto } from './dto/create-notificaciones-personale.dto';
import { UpdateNotificacionesPersonaleDto } from './dto/update-notificaciones-personale.dto';

@Injectable()
export class NotificacionesPersonalesService {
  create(createNotificacionesPersonaleDto: CreateNotificacionesPersonaleDto) {
    return 'This action adds a new notificacionesPersonale';
  }

  findAll() {
    return `This action returns all notificacionesPersonales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notificacionesPersonale`;
  }

  update(id: number, updateNotificacionesPersonaleDto: UpdateNotificacionesPersonaleDto) {
    return `This action updates a #${id} notificacionesPersonale`;
  }

  remove(id: number) {
    return `This action removes a #${id} notificacionesPersonale`;
  }
}
