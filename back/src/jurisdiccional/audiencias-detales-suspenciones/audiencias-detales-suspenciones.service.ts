import { Injectable } from '@nestjs/common';
import { CreateAudienciasDetalesSuspencioneDto } from './dto/create-audiencias-detales-suspencione.dto';
import { UpdateAudienciasDetalesSuspencioneDto } from './dto/update-audiencias-detales-suspencione.dto';

@Injectable()
export class AudienciasDetalesSuspencionesService {
  create(createAudienciasDetalesSuspencioneDto: CreateAudienciasDetalesSuspencioneDto) {
    return 'This action adds a new audienciasDetalesSuspencione';
  }

  findAll() {
    return `This action returns all audienciasDetalesSuspenciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} audienciasDetalesSuspencione`;
  }

  update(id: number, updateAudienciasDetalesSuspencioneDto: UpdateAudienciasDetalesSuspencioneDto) {
    return `This action updates a #${id} audienciasDetalesSuspencione`;
  }

  remove(id: number) {
    return `This action removes a #${id} audienciasDetalesSuspencione`;
  }
}
