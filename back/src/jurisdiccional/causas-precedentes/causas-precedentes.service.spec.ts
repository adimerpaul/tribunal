import { Test, TestingModule } from '@nestjs/testing';
import { CausasPrecedentesService } from './causas-precedentes.service';

describe.skip('CausasPrecedentesService', () => {
  let service: CausasPrecedentesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CausasPrecedentesService],
    }).compile();

    service = module.get<CausasPrecedentesService>(CausasPrecedentesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
