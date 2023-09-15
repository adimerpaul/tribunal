import { Test, TestingModule } from '@nestjs/testing';
import { AudienciasDetallesService } from './audiencias-detalles.service';

describe.skip('AudienciasDetallesService', () => {
  let service: AudienciasDetallesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AudienciasDetallesService],
    }).compile();

    service = module.get<AudienciasDetallesService>(AudienciasDetallesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
