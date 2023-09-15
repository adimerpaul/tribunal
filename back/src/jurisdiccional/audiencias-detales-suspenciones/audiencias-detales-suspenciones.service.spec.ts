import { Test, TestingModule } from '@nestjs/testing';
import { AudienciasDetalesSuspencionesService } from './audiencias-detales-suspenciones.service';

describe.skip('AudienciasDetalesSuspencionesService', () => {
  let service: AudienciasDetalesSuspencionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AudienciasDetalesSuspencionesService],
    }).compile();

    service = module.get<AudienciasDetalesSuspencionesService>(AudienciasDetalesSuspencionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
