import { Test, TestingModule } from '@nestjs/testing';
import { BienesService } from './bienes.service';

describe.skip('BienesService', () => {
  let service: BienesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BienesService],
    }).compile();

    service = module.get<BienesService>(BienesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
