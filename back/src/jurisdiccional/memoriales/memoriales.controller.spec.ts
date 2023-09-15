import { Test, TestingModule } from '@nestjs/testing';
import { MemorialesController } from './memoriales.controller';
import { MemorialesService } from './memoriales.service';

describe.skip('MemorialesController', () => {
  let controller: MemorialesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemorialesController],
      providers: [MemorialesService],
    }).compile();

    controller = module.get<MemorialesController>(MemorialesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
