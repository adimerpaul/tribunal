import { Test, TestingModule } from '@nestjs/testing';
import { SujetosProcesalesDelitosService } from './sujetos-procesales-delitos.service';

describe.skip('SujetosProcesalesDelitosService', () => {
  let service: SujetosProcesalesDelitosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SujetosProcesalesDelitosService],
    }).compile();

    service = module.get<SujetosProcesalesDelitosService>(SujetosProcesalesDelitosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
