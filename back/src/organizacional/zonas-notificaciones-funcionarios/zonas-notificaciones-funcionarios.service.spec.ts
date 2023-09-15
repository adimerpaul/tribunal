import { Test, TestingModule } from '@nestjs/testing';
import { ZonasNotificacionesFuncionariosService } from './zonas-notificaciones-funcionarios.service';

describe.skip('ZonasNotificacionesFuncionariosService', () => {
  let service: ZonasNotificacionesFuncionariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZonasNotificacionesFuncionariosService],
    }).compile();

    service = module.get<ZonasNotificacionesFuncionariosService>(ZonasNotificacionesFuncionariosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
