import { Test, TestingModule } from '@nestjs/testing';
import { SujetosProcesalesActosProcesalesController } from './sujetos-procesales-actos-procesales.controller';
import { SujetosProcesalesActosProcesalesService } from './sujetos-procesales-actos-procesales.service';

describe.skip('SujetosProcesalesActosProcesalesController', () => {
  let controller: SujetosProcesalesActosProcesalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SujetosProcesalesActosProcesalesController],
      providers: [SujetosProcesalesActosProcesalesService],
    }).compile();

    controller = module.get<SujetosProcesalesActosProcesalesController>(SujetosProcesalesActosProcesalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
