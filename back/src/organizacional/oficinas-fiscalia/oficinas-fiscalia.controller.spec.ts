import { Test, TestingModule } from '@nestjs/testing';
import { OficinasFiscaliaController } from './oficinas-fiscalia.controller';
import { OficinasFiscaliaService } from './oficinas-fiscalia.service';

describe.skip('OficinasFiscaliaController', () => {
  let controller: OficinasFiscaliaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OficinasFiscaliaController],
      providers: [OficinasFiscaliaService],
    }).compile();

    controller = module.get<OficinasFiscaliaController>(OficinasFiscaliaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
