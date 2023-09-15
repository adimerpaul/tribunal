import { Test, TestingModule } from '@nestjs/testing';
import { NotificacionesPersonalesService } from './notificaciones-personales.service';

describe.skip('NotificacionesPersonalesService', () => {
  let service: NotificacionesPersonalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificacionesPersonalesService],
    }).compile();

    service = module.get<NotificacionesPersonalesService>(NotificacionesPersonalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
