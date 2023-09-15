import { Test, TestingModule } from '@nestjs/testing';
import { OficinasEstadosService } from './oficinas-estados.service';

describe.skip('OficinasEstadosService', () => {
  let service: OficinasEstadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OficinasEstadosService],
    }).compile();

    service = module.get<OficinasEstadosService>(OficinasEstadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
