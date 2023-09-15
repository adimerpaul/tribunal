import { Test, TestingModule } from '@nestjs/testing';
import { TiposSuspensionesAudienciasService } from './tipos-suspensiones-audiencias.service';

describe.skip('TiposSuspensionesAudienciasService', () => {
  let service: TiposSuspensionesAudienciasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposSuspensionesAudienciasService],
    }).compile();

    service = module.get<TiposSuspensionesAudienciasService>(TiposSuspensionesAudienciasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
