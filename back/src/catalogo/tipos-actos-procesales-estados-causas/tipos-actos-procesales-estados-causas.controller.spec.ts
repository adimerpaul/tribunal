import { Test, TestingModule } from '@nestjs/testing';
import { TiposActosProcesalesEstadosCausasController } from './tipos-actos-procesales-estados-causas.controller';
import { TiposActosProcesalesEstadosCausasService } from './tipos-actos-procesales-estados-causas.service';

describe.skip('TiposActosProcesalesEstadosCausasController', () => {
  let controller: TiposActosProcesalesEstadosCausasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposActosProcesalesEstadosCausasController],
      providers: [TiposActosProcesalesEstadosCausasService],
    }).compile();

    controller = module.get<TiposActosProcesalesEstadosCausasController>(TiposActosProcesalesEstadosCausasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
