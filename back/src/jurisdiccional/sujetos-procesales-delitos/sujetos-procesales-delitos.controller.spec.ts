import { Test, TestingModule } from '@nestjs/testing';
import { SujetosProcesalesDelitosController } from './sujetos-procesales-delitos.controller';
import { SujetosProcesalesDelitosService } from './sujetos-procesales-delitos.service';

describe.skip('SujetosProcesalesDelitosController', () => {
  let controller: SujetosProcesalesDelitosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SujetosProcesalesDelitosController],
      providers: [SujetosProcesalesDelitosService],
    }).compile();

    controller = module.get<SujetosProcesalesDelitosController>(SujetosProcesalesDelitosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
