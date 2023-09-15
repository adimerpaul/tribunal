import { Test, TestingModule } from '@nestjs/testing';
import { SujetosProcesalesService } from './sujetos-procesales.service';

describe.skip('SujetosProcesalesService', () => {
  let service: SujetosProcesalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SujetosProcesalesService],
    }).compile();

    service = module.get<SujetosProcesalesService>(SujetosProcesalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
