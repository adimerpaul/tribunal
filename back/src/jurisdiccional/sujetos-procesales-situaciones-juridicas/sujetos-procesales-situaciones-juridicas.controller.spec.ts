import { Test, TestingModule } from '@nestjs/testing';
import { SujetosProcesalesSituacionesJuridicasController } from './sujetos-procesales-situaciones-juridicas.controller';
import { SujetosProcesalesSituacionesJuridicasService } from './sujetos-procesales-situaciones-juridicas.service';

describe.skip('SujetosProcesalesSituacionesJuridicasController', () => {
  let controller: SujetosProcesalesSituacionesJuridicasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SujetosProcesalesSituacionesJuridicasController],
      providers: [SujetosProcesalesSituacionesJuridicasService],
    }).compile();

    controller = module.get<SujetosProcesalesSituacionesJuridicasController>(
      SujetosProcesalesSituacionesJuridicasController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
