import { Test, TestingModule } from '@nestjs/testing';
import { AudienciasDetallesExternasService } from './audiencias-detalles-externas.service';

describe.skip('AudienciasDetallesExternasService', () => {
  let service: AudienciasDetallesExternasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AudienciasDetallesExternasService],
    }).compile();

    service = module.get<AudienciasDetallesExternasService>(AudienciasDetallesExternasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
