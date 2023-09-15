import { Test, TestingModule } from '@nestjs/testing';
import { ZonasNotificacionesService } from './zonas-notificaciones.service';

describe.skip('ZonasNotificacionesService', () => {
  let service: ZonasNotificacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZonasNotificacionesService],
    }).compile();

    service = module.get<ZonasNotificacionesService>(ZonasNotificacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
