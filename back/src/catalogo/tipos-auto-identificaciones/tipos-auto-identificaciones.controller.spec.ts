import { Test, TestingModule } from '@nestjs/testing';
import { TiposAutoIdentificacionesController } from './tipos-auto-identificaciones.controller';
import { TiposAutoIdentificacionesService } from './tipos-auto-identificaciones.service';

describe.skip('TiposAutoIdentificacionesController', () => {
  let controller: TiposAutoIdentificacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposAutoIdentificacionesController],
      providers: [TiposAutoIdentificacionesService],
    }).compile();

    controller = module.get<TiposAutoIdentificacionesController>(TiposAutoIdentificacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
