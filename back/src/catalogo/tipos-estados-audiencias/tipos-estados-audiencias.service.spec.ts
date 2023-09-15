import { Test, TestingModule } from '@nestjs/testing';
import { TiposEstadosAudienciasService } from './tipos-estados-audiencias.service';

describe.skip('TiposEstadosAudienciasService', () => {
  let service: TiposEstadosAudienciasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposEstadosAudienciasService],
    }).compile();

    service = module.get<TiposEstadosAudienciasService>(TiposEstadosAudienciasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
