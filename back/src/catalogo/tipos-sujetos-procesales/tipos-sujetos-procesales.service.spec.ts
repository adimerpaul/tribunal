import { Test, TestingModule } from '@nestjs/testing';
import { TiposSujetosProcesalesService } from './tipos-sujetos-procesales.service';

describe.skip('TiposSujetosProcesalesService', () => {
  let service: TiposSujetosProcesalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposSujetosProcesalesService],
    }).compile();

    service = module.get<TiposSujetosProcesalesService>(TiposSujetosProcesalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
