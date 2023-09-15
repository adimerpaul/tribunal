import { Test, TestingModule } from '@nestjs/testing';
import { TiposCargosFuncionariosController } from './tipos-cargos-funcionarios.controller';
import { TiposCargosFuncionariosService } from './tipos-cargos-funcionarios.service';

describe.skip('TiposCargosFuncionariosController', () => {
  let controller: TiposCargosFuncionariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposCargosFuncionariosController],
      providers: [TiposCargosFuncionariosService],
    }).compile();

    controller = module.get<TiposCargosFuncionariosController>(TiposCargosFuncionariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
