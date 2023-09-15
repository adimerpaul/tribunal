import { Injectable } from '@nestjs/common';
import { CreateSujetosProcesalesDelitoDto } from './dto/create-sujetos-procesales-delito.dto';
import { UpdateSujetosProcesalesDelitoDto } from './dto/update-sujetos-procesales-delito.dto';

@Injectable()
export class SujetosProcesalesDelitosService {
  create(createSujetosProcesalesDelitoDto: CreateSujetosProcesalesDelitoDto) {
    return 'This action adds a new sujetosProcesalesDelito';
  }

  findAll() {
    return `This action returns all sujetosProcesalesDelitos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sujetosProcesalesDelito`;
  }

  update(id: number, updateSujetosProcesalesDelitoDto: UpdateSujetosProcesalesDelitoDto) {
    return `This action updates a #${id} sujetosProcesalesDelito`;
  }

  remove(id: number) {
    return `This action removes a #${id} sujetosProcesalesDelito`;
  }
}
