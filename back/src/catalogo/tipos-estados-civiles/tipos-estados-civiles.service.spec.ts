import { Test, TestingModule } from '@nestjs/testing';
import { TiposEstadosCivilesService } from './tipos-estados-civiles.service';

describe.skip('TiposEstadosCivilesService', () => {
  let service: TiposEstadosCivilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposEstadosCivilesService],
    }).compile();

    service = module.get<TiposEstadosCivilesService>(TiposEstadosCivilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
