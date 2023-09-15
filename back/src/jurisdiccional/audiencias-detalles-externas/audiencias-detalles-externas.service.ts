import { Injectable } from '@nestjs/common';
import { CreateAudienciasDetallesExternaDto } from './dto/create-audiencias-detalles-externa.dto';
import { UpdateAudienciasDetallesExternaDto } from './dto/update-audiencias-detalles-externa.dto';

@Injectable()
export class AudienciasDetallesExternasService {
  create(createAudienciasDetallesExternaDto: CreateAudienciasDetallesExternaDto) {
    return 'This action adds a new audienciasDetallesExterna';
  }

  findAll() {
    return `This action returns all audienciasDetallesExternas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} audienciasDetallesExterna`;
  }

  update(id: number, updateAudienciasDetallesExternaDto: UpdateAudienciasDetallesExternaDto) {
    return `This action updates a #${id} audienciasDetallesExterna`;
  }

  remove(id: number) {
    return `This action removes a #${id} audienciasDetallesExterna`;
  }
}
