import { Test, TestingModule } from '@nestjs/testing';
import { TiposSituacionesJuridicasController } from './tipos-situaciones-juridicas.controller';
import { TiposSituacionesJuridicasService } from './tipos-situaciones-juridicas.service';

describe.skip('TiposSituacionesJuridicasController', () => {
  let controller: TiposSituacionesJuridicasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposSituacionesJuridicasController],
      providers: [TiposSituacionesJuridicasService],
    }).compile();

    controller = module.get<TiposSituacionesJuridicasController>(TiposSituacionesJuridicasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
