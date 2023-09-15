import { Test, TestingModule } from '@nestjs/testing';
import { TiposActosProcesalesEtapasCausasService } from './tipos-actos-procesales-etapas-causas.service';

describe.skip('TiposActosProcesalesEtapasCausasService', () => {
  let service: TiposActosProcesalesEtapasCausasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposActosProcesalesEtapasCausasService],
    }).compile();

    service = module.get<TiposActosProcesalesEtapasCausasService>(TiposActosProcesalesEtapasCausasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
