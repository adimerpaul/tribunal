import { Test, TestingModule } from '@nestjs/testing';
import { TiposCargosFuncionariosService } from './tipos-cargos-funcionarios.service';

describe.skip('TiposCargosFuncionariosService', () => {
  let service: TiposCargosFuncionariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposCargosFuncionariosService],
    }).compile();

    service = module.get<TiposCargosFuncionariosService>(TiposCargosFuncionariosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
