import { Test, TestingModule } from '@nestjs/testing';
import { CausasFiscalesController } from './causas-fiscales.controller';
import { CausasFiscalesService } from './causas-fiscales.service';

describe.skip('CausasFiscalesController', () => {
  let controller: CausasFiscalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CausasFiscalesController],
      providers: [CausasFiscalesService],
    }).compile();

    controller = module.get<CausasFiscalesController>(CausasFiscalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
