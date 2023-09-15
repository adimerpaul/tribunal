import { Test, TestingModule } from '@nestjs/testing';
import { TiposEstadosAudienciasController } from './tipos-estados-audiencias.controller';
import { TiposEstadosAudienciasService } from './tipos-estados-audiencias.service';

describe.skip('TiposEstadosAudienciasController', () => {
  let controller: TiposEstadosAudienciasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposEstadosAudienciasController],
      providers: [TiposEstadosAudienciasService],
    }).compile();

    controller = module.get<TiposEstadosAudienciasController>(TiposEstadosAudienciasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
