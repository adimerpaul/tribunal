import { Test, TestingModule } from '@nestjs/testing';
import { TiposNotificacionesService } from './tipos-notificaciones.service';

describe.skip('TiposNotificacionesService', () => {
  let service: TiposNotificacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposNotificacionesService],
    }).compile();

    service = module.get<TiposNotificacionesService>(TiposNotificacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
