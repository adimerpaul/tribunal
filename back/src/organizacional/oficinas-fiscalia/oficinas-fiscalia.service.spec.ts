import { Test, TestingModule } from '@nestjs/testing';
import { OficinasFiscaliaService } from './oficinas-fiscalia.service';

describe.skip('OficinasFiscaliaService', () => {
  let service: OficinasFiscaliaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OficinasFiscaliaService],
    }).compile();

    service = module.get<OficinasFiscaliaService>(OficinasFiscaliaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
