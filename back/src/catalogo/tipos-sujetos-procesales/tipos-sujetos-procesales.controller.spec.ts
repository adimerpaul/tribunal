import { Test, TestingModule } from '@nestjs/testing';
import { TiposSujetosProcesalesController } from './tipos-sujetos-procesales.controller';
import { TiposSujetosProcesalesService } from './tipos-sujetos-procesales.service';

describe.skip('TiposSujetosProcesalesController', () => {
  let controller: TiposSujetosProcesalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposSujetosProcesalesController],
      providers: [TiposSujetosProcesalesService],
    }).compile();

    controller = module.get<TiposSujetosProcesalesController>(TiposSujetosProcesalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
