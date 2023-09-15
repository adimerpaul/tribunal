import { Injectable } from '@nestjs/common';
import { CreateSujetosProcesalesSituacionesJuridicaDto } from './dto/create-sujetos-procesales-situaciones-juridica.dto';
import { UpdateSujetosProcesalesSituacionesJuridicaDto } from './dto/update-sujetos-procesales-situaciones-juridica.dto';

@Injectable()
export class SujetosProcesalesSituacionesJuridicasService {
  create(createSujetosProcesalesSituacionesJuridicaDto: CreateSujetosProcesalesSituacionesJuridicaDto) {
    return 'This action adds a new sujetosProcesalesSituacionesJuridica';
  }

  findAll() {
    return `This action returns all sujetosProcesalesSituacionesJuridicas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sujetosProcesalesSituacionesJuridica`;
  }

  update(id: number, updateSujetosProcesalesSituacionesJuridicaDto: UpdateSujetosProcesalesSituacionesJuridicaDto) {
    return `This action updates a #${id} sujetosProcesalesSituacionesJuridica`;
  }

  remove(id: number) {
    return `This action removes a #${id} sujetosProcesalesSituacionesJuridica`;
  }
}
