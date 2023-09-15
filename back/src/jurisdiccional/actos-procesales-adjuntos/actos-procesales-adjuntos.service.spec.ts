import { Test, TestingModule } from '@nestjs/testing';
import { ActosProcesalesAdjuntosService } from './actos-procesales-adjuntos.service';

describe.skip('ActosProcesalesAdjuntosService', () => {
  let service: ActosProcesalesAdjuntosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActosProcesalesAdjuntosService],
    }).compile();

    service = module.get<ActosProcesalesAdjuntosService>(ActosProcesalesAdjuntosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
