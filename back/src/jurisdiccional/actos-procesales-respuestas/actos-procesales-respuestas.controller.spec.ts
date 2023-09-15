import { Test, TestingModule } from '@nestjs/testing';
import { ActosProcesalesRespuestasController } from './actos-procesales-respuestas.controller';
import { ActosProcesalesRespuestasService } from './actos-procesales-respuestas.service';

describe.skip('ActosProcesalesRespuestasController', () => {
  let controller: ActosProcesalesRespuestasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActosProcesalesRespuestasController],
      providers: [ActosProcesalesRespuestasService],
    }).compile();

    controller = module.get<ActosProcesalesRespuestasController>(ActosProcesalesRespuestasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
