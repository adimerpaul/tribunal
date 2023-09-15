import { Test, TestingModule } from '@nestjs/testing';
import { ActosProcesalesService } from './actos-procesales.service';

describe.skip('ActosProcesalesService', () => {
  let service: ActosProcesalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActosProcesalesService],
    }).compile();

    service = module.get<ActosProcesalesService>(ActosProcesalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
