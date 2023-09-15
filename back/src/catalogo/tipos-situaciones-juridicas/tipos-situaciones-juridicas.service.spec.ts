import { Test, TestingModule } from '@nestjs/testing';
import { TiposSituacionesJuridicasService } from './tipos-situaciones-juridicas.service';

describe.skip('TiposSituacionesJuridicasService', () => {
  let service: TiposSituacionesJuridicasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposSituacionesJuridicasService],
    }).compile();

    service = module.get<TiposSituacionesJuridicasService>(TiposSituacionesJuridicasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
