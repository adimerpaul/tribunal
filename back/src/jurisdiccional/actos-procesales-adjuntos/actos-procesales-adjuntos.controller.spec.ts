import { Test, TestingModule } from '@nestjs/testing';
import { ActosProcesalesAdjuntosController } from './actos-procesales-adjuntos.controller';
import { ActosProcesalesAdjuntosService } from './actos-procesales-adjuntos.service';

describe.skip('ActosProcesalesAdjuntosController', () => {
  let controller: ActosProcesalesAdjuntosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActosProcesalesAdjuntosController],
      providers: [ActosProcesalesAdjuntosService],
    }).compile();

    controller = module.get<ActosProcesalesAdjuntosController>(ActosProcesalesAdjuntosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
