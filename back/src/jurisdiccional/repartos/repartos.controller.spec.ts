import { Test, TestingModule } from '@nestjs/testing';
import { RepartosController } from './repartos.controller';
import { RepartosService } from './repartos.service';

describe.skip('RepartosController', () => {
  let controller: RepartosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepartosController],
      providers: [RepartosService],
    }).compile();

    controller = module.get<RepartosController>(RepartosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
