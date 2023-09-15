import { Test, TestingModule } from '@nestjs/testing';
import { SujetosProcesalesPrivacionesLibertadesController } from './sujetos-procesales-privaciones-libertades.controller';
import { SujetosProcesalesPrivacionesLibertadesService } from './sujetos-procesales-privaciones-libertades.service';

describe.skip('SujetosProcesalesPrivacionesLibertadesController', () => {
  let controller: SujetosProcesalesPrivacionesLibertadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SujetosProcesalesPrivacionesLibertadesController],
      providers: [SujetosProcesalesPrivacionesLibertadesService],
    }).compile();

    controller = module.get<SujetosProcesalesPrivacionesLibertadesController>(
      SujetosProcesalesPrivacionesLibertadesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
