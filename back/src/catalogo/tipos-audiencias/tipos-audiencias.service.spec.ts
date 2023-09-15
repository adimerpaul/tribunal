import { Test, TestingModule } from '@nestjs/testing';
import { TiposAudienciasService } from './tipos-audiencias.service';

describe.skip('TiposAudienciasService', () => {
  let service: TiposAudienciasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposAudienciasService],
    }).compile();

    service = module.get<TiposAudienciasService>(TiposAudienciasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
