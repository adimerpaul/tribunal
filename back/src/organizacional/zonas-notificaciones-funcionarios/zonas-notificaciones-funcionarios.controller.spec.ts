import { Test, TestingModule } from '@nestjs/testing';
import { ZonasNotificacionesFuncionariosController } from './zonas-notificaciones-funcionarios.controller';
import { ZonasNotificacionesFuncionariosService } from './zonas-notificaciones-funcionarios.service';

describe.skip('ZonasNotificacionesFuncionariosController', () => {
  let controller: ZonasNotificacionesFuncionariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZonasNotificacionesFuncionariosController],
      providers: [ZonasNotificacionesFuncionariosService],
    }).compile();

    controller = module.get<ZonasNotificacionesFuncionariosController>(ZonasNotificacionesFuncionariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
