import { Test, TestingModule } from '@nestjs/testing';
import { CausasFiscalesService } from './causas-fiscales.service';

describe.skip('CausasFiscalesService', () => {
  let service: CausasFiscalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CausasFiscalesService],
    }).compile();

    service = module.get<CausasFiscalesService>(CausasFiscalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
