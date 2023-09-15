import { Test, TestingModule } from '@nestjs/testing';
import { SujetosProcesalesPrivacionesLibertadesService } from './sujetos-procesales-privaciones-libertades.service';

describe.skip('SujetosProcesalesPrivacionesLibertadesService', () => {
  let service: SujetosProcesalesPrivacionesLibertadesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SujetosProcesalesPrivacionesLibertadesService],
    }).compile();

    service = module.get<SujetosProcesalesPrivacionesLibertadesService>(SujetosProcesalesPrivacionesLibertadesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
