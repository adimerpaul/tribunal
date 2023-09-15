import { Test, TestingModule } from '@nestjs/testing';
import { ZonasNotificacionesController } from './zonas-notificaciones.controller';
import { ZonasNotificacionesService } from './zonas-notificaciones.service';

describe.skip('ZonasNotificacionesController', () => {
  let controller: ZonasNotificacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZonasNotificacionesController],
      providers: [ZonasNotificacionesService],
    }).compile();

    controller = module.get<ZonasNotificacionesController>(ZonasNotificacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
