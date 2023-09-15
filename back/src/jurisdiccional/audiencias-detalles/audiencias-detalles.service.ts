import { Injectable } from '@nestjs/common';
import { CreateAudienciasDetalleDto } from './dto/create-audiencias-detalle.dto';
import { UpdateAudienciasDetalleDto } from './dto/update-audiencias-detalle.dto';

@Injectable()
export class AudienciasDetallesService {
  create(createAudienciasDetalleDto: CreateAudienciasDetalleDto) {
    return 'This action adds a new audienciasDetalle';
  }

  findAll() {
    return `This action returns all audienciasDetalles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} audienciasDetalle`;
  }

  update(id: number, updateAudienciasDetalleDto: UpdateAudienciasDetalleDto) {
    return `This action updates a #${id} audienciasDetalle`;
  }

  remove(id: number) {
    return `This action removes a #${id} audienciasDetalle`;
  }
}
