import { Test, TestingModule } from '@nestjs/testing';
import { TipoplantillaController } from './tipos-plantillas.controller';

describe.skip('TiposPlantillasController', () => {
  let controller: TipoplantillaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoplantillaController],
      providers: [TipoplantillaController],
    }).compile();

    controller = module.get<TipoplantillaController>(TipoplantillaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
