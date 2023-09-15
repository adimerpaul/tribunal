import { Test, TestingModule } from '@nestjs/testing';
import { ActosProcesalesRespuestasService } from './actos-procesales-respuestas.service';

describe.skip('ActosProcesalesRespuestasService', () => {
  let service: ActosProcesalesRespuestasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActosProcesalesRespuestasService],
    }).compile();

    service = module.get<ActosProcesalesRespuestasService>(ActosProcesalesRespuestasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
