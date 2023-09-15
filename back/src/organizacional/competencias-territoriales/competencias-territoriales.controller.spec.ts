import { Test, TestingModule } from '@nestjs/testing';
import { CompetenciasTerritorialesController } from './competencias-territoriales.controller';
import { CompetenciasTerritorialesService } from './competencias-territoriales.service';

describe.skip('CompetenciasTerritorialesController', () => {
  let controller: CompetenciasTerritorialesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompetenciasTerritorialesController],
      providers: [CompetenciasTerritorialesService],
    }).compile();

    controller = module.get<CompetenciasTerritorialesController>(CompetenciasTerritorialesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
