import { Test, TestingModule } from '@nestjs/testing';
import { CompetenciasTerritorialesService } from './competencias-territoriales.service';

describe.skip('CompetenciasTerritorialesService', () => {
  let service: CompetenciasTerritorialesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompetenciasTerritorialesService],
    }).compile();

    service = module.get<CompetenciasTerritorialesService>(CompetenciasTerritorialesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
