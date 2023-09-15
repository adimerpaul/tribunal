import { Test, TestingModule } from '@nestjs/testing';
import { TiposNotificacionesController } from './tipos-notificaciones.controller';
import { TiposNotificacionesService } from './tipos-notificaciones.service';

describe.skip('TiposNotificacionesController', () => {
  let controller: TiposNotificacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposNotificacionesController],
      providers: [TiposNotificacionesService],
    }).compile();

    controller = module.get<TiposNotificacionesController>(TiposNotificacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
