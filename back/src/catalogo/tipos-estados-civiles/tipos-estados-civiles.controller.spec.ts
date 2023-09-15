import { Test, TestingModule } from '@nestjs/testing';
import { TiposEstadosCivilesController } from './tipos-estados-civiles.controller';
import { TiposEstadosCivilesService } from './tipos-estados-civiles.service';

describe.skip('TiposEstadosCivilesController', () => {
  let controller: TiposEstadosCivilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposEstadosCivilesController],
      providers: [TiposEstadosCivilesService],
    }).compile();

    controller = module.get<TiposEstadosCivilesController>(TiposEstadosCivilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
