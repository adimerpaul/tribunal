import { Test, TestingModule } from '@nestjs/testing';
import { TiposSeguimientosService } from './tipos-seguimientos.service';

describe.skip('TiposSeguimientosService', () => {
  let service: TiposSeguimientosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposSeguimientosService],
    }).compile();

    service = module.get<TiposSeguimientosService>(TiposSeguimientosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
