import { Test, TestingModule } from '@nestjs/testing';
import { ActosProcesalesController } from './actos-procesales.controller';
import { ActosProcesalesService } from './actos-procesales.service';

describe.skip('ActosProcesalesController', () => {
  let controller: ActosProcesalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActosProcesalesController],
      providers: [ActosProcesalesService],
    }).compile();

    controller = module.get<ActosProcesalesController>(ActosProcesalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
