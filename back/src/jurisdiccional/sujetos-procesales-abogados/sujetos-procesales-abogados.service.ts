import { Injectable } from '@nestjs/common';
import { CreateSujetosProcesalesAbogadoDto } from './dto/create-sujetos-procesales-abogado.dto';
import { UpdateSujetosProcesalesAbogadoDto } from './dto/update-sujetos-procesales-abogado.dto';

@Injectable()
export class SujetosProcesalesAbogadosService {
  create(createSujetosProcesalesAbogadoDto: CreateSujetosProcesalesAbogadoDto) {
    return 'This action adds a new sujetosProcesalesAbogado';
  }

  findAll() {
    return `This action returns all sujetosProcesalesAbogados`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sujetosProcesalesAbogado`;
  }

  update(id: number, updateSujetosProcesalesAbogadoDto: UpdateSujetosProcesalesAbogadoDto) {
    return `This action updates a #${id} sujetosProcesalesAbogado`;
  }

  remove(id: number) {
    return `This action removes a #${id} sujetosProcesalesAbogado`;
  }
}
