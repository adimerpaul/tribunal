import { Injectable } from '@nestjs/common';
import { CreateActosProcesalesRespuestaDto } from './dto/create-actos-procesales-respuesta.dto';
import { UpdateActosProcesalesRespuestaDto } from './dto/update-actos-procesales-respuesta.dto';

@Injectable()
export class ActosProcesalesRespuestasService {
  create(createActosProcesalesRespuestaDto: CreateActosProcesalesRespuestaDto) {
    return 'This action adds a new actosProcesalesRespuesta';
  }

  findAll() {
    return `This action returns all actosProcesalesRespuestas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} actosProcesalesRespuesta`;
  }

  update(id: number, updateActosProcesalesRespuestaDto: UpdateActosProcesalesRespuestaDto) {
    return `This action updates a #${id} actosProcesalesRespuesta`;
  }

  remove(id: number) {
    return `This action removes a #${id} actosProcesalesRespuesta`;
  }
}
