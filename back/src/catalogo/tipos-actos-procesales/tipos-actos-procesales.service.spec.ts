import { Test, TestingModule } from '@nestjs/testing';
import { TiposActosProcesalesService } from './tipos-actos-procesales.service';

describe.skip('TiposActosProcesalesService', () => {
  let service: TiposActosProcesalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposActosProcesalesService],
    }).compile();

    service = module.get<TiposActosProcesalesService>(TiposActosProcesalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
