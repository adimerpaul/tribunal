import { Test, TestingModule } from '@nestjs/testing';
import { SalasAudienciasOficinasService } from './salas-audiencias-oficinas.service';

describe.skip('SalasAudienciasOficinasService', () => {
  let service: SalasAudienciasOficinasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalasAudienciasOficinasService],
    }).compile();

    service = module.get<SalasAudienciasOficinasService>(SalasAudienciasOficinasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
