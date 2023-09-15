import { Test, TestingModule } from '@nestjs/testing';
import { MemorialesService } from './memoriales.service';

describe.skip('MemorialesService', () => {
  let service: MemorialesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemorialesService],
    }).compile();

    service = module.get<MemorialesService>(MemorialesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
