import { Test, TestingModule } from '@nestjs/testing';
import { FuncionariosController } from './funcionarios.controller';
import { FuncionariosService } from './funcionarios.service';

describe.skip('FuncionariosController', () => {
  let controller: FuncionariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FuncionariosController],
      providers: [FuncionariosService],
    }).compile();

    controller = module.get<FuncionariosController>(FuncionariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
