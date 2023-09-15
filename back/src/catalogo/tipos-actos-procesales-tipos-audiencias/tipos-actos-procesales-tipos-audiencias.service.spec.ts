import { Test, TestingModule } from '@nestjs/testing';
import { TiposActosProcesalesTiposAudienciasService } from './tipos-actos-procesales-tipos-audiencias.service';

describe.skip('TiposActosProcesalesTiposAudienciasService', () => {
  let service: TiposActosProcesalesTiposAudienciasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposActosProcesalesTiposAudienciasService],
    }).compile();

    service = module.get<TiposActosProcesalesTiposAudienciasService>(TiposActosProcesalesTiposAudienciasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
