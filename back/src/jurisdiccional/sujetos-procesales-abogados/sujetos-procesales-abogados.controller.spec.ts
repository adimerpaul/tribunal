import { Test, TestingModule } from '@nestjs/testing';
import { SujetosProcesalesAbogadosController } from './sujetos-procesales-abogados.controller';
import { SujetosProcesalesAbogadosService } from './sujetos-procesales-abogados.service';

describe.skip('SujetosProcesalesAbogadosController', () => {
  let controller: SujetosProcesalesAbogadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SujetosProcesalesAbogadosController],
      providers: [SujetosProcesalesAbogadosService],
    }).compile();

    controller = module.get<SujetosProcesalesAbogadosController>(SujetosProcesalesAbogadosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
