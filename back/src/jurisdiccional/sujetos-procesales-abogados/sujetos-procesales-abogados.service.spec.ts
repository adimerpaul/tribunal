import { Test, TestingModule } from '@nestjs/testing';
import { SujetosProcesalesAbogadosService } from './sujetos-procesales-abogados.service';

describe.skip('SujetosProcesalesAbogadosService', () => {
  let service: SujetosProcesalesAbogadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SujetosProcesalesAbogadosService],
    }).compile();

    service = module.get<SujetosProcesalesAbogadosService>(SujetosProcesalesAbogadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
