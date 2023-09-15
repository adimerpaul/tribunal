import { Test, TestingModule } from '@nestjs/testing';
import { CausaDelitosService } from './causa-delitos.service';

describe.skip('CausaDelitosService', () => {
  let service: CausaDelitosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CausaDelitosService],
    }).compile();

    service = module.get<CausaDelitosService>(CausaDelitosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
