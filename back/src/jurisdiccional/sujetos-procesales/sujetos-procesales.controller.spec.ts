import { Test, TestingModule } from '@nestjs/testing';
import { SujetosProcesalesController } from './sujetos-procesales.controller';
import { SujetosProcesalesService } from './sujetos-procesales.service';

describe.skip('SujetosProcesalesController', () => {
  let controller: SujetosProcesalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SujetosProcesalesController],
      providers: [SujetosProcesalesService],
    }).compile();

    controller = module.get<SujetosProcesalesController>(SujetosProcesalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
