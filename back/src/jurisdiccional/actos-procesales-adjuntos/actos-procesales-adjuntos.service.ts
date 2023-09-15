import { Injectable } from '@nestjs/common';
import { CreateActosProcesalesAdjuntoDto } from './dto/create-actos-procesales-adjunto.dto';
import { UpdateActosProcesalesAdjuntoDto } from './dto/update-actos-procesales-adjunto.dto';

@Injectable()
export class ActosProcesalesAdjuntosService {
  create(createActosProcesalesAdjuntoDto: CreateActosProcesalesAdjuntoDto) {
    return 'This action adds a new actosProcesalesAdjunto';
  }

  findAll() {
    return `This action returns all actosProcesalesAdjuntos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} actosProcesalesAdjunto`;
  }

  update(id: number, updateActosProcesalesAdjuntoDto: UpdateActosProcesalesAdjuntoDto) {
    return `This action updates a #${id} actosProcesalesAdjunto`;
  }

  remove(id: number) {
    return `This action removes a #${id} actosProcesalesAdjunto`;
  }
}
