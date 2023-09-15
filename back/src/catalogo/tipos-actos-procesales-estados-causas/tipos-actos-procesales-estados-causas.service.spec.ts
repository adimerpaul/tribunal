import { Test, TestingModule } from '@nestjs/testing';
import { TiposActosProcesalesEstadosCausasService } from './tipos-actos-procesales-estados-causas.service';

describe.skip('TiposActosProcesalesEstadosCausasService', () => {
  let service: TiposActosProcesalesEstadosCausasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposActosProcesalesEstadosCausasService],
    }).compile();

    service = module.get<TiposActosProcesalesEstadosCausasService>(TiposActosProcesalesEstadosCausasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
