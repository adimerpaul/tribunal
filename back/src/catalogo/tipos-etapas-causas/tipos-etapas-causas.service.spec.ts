import { Test, TestingModule } from '@nestjs/testing';
import { TiposEtapasCausasService } from './tipos-etapas-causas.service';

describe.skip('TiposEtapasCausasService', () => {
  let service: TiposEtapasCausasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposEtapasCausasService],
    }).compile();

    service = module.get<TiposEtapasCausasService>(TiposEtapasCausasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
