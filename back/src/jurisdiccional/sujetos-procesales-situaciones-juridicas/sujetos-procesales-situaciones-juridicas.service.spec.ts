import { Test, TestingModule } from '@nestjs/testing';
import { SujetosProcesalesSituacionesJuridicasService } from './sujetos-procesales-situaciones-juridicas.service';

describe.skip('SujetosProcesalesSituacionesJuridicasService', () => {
  let service: SujetosProcesalesSituacionesJuridicasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SujetosProcesalesSituacionesJuridicasService],
    }).compile();

    service = module.get<SujetosProcesalesSituacionesJuridicasService>(SujetosProcesalesSituacionesJuridicasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
