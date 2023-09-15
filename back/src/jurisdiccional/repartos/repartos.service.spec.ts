import { Test, TestingModule } from '@nestjs/testing';
import { RepartosService } from './repartos.service';

describe.skip('RepartosService', () => {
  let service: RepartosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepartosService],
    }).compile();

    service = module.get<RepartosService>(RepartosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
