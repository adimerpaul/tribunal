import { Test, TestingModule } from '@nestjs/testing';
import { NotificacionesPersonalesController } from './notificaciones-personales.controller';
import { NotificacionesPersonalesService } from './notificaciones-personales.service';

describe.skip('NotificacionesPersonalesController', () => {
  let controller: NotificacionesPersonalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificacionesPersonalesController],
      providers: [NotificacionesPersonalesService],
    }).compile();

    controller = module.get<NotificacionesPersonalesController>(NotificacionesPersonalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
