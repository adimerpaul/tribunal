import { Test, TestingModule } from '@nestjs/testing';
import { SujetosProcesalesActosProcesalesService } from './sujetos-procesales-actos-procesales.service';

describe.skip('SujetosProcesalesActosProcesalesService', () => {
  let service: SujetosProcesalesActosProcesalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SujetosProcesalesActosProcesalesService],
    }).compile();

    service = module.get<SujetosProcesalesActosProcesalesService>(SujetosProcesalesActosProcesalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
