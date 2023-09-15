import { Test, TestingModule } from '@nestjs/testing';
import { TiposSeguimientosController } from './tipos-seguimientos.controller';
import { TiposSeguimientosService } from './tipos-seguimientos.service';

describe.skip('TiposSeguimientosController', () => {
  let controller: TiposSeguimientosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposSeguimientosController],
      providers: [TiposSeguimientosService],
    }).compile();

    controller = module.get<TiposSeguimientosController>(TiposSeguimientosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
