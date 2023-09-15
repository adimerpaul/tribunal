import { Test, TestingModule } from '@nestjs/testing';
import { TiposAutoIdentificacionesService } from './tipos-auto-identificaciones.service';

describe.skip('TiposAutoIdentificacionesService', () => {
  let service: TiposAutoIdentificacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposAutoIdentificacionesService],
    }).compile();

    service = module.get<TiposAutoIdentificacionesService>(TiposAutoIdentificacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
