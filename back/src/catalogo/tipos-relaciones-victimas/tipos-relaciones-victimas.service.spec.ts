import { Test, TestingModule } from '@nestjs/testing';
import { TiposRelacionesVictimasService } from './tipos-relaciones-victimas.service';

describe.skip('TiposRelacionesVictimasService', () => {
  let service: TiposRelacionesVictimasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposRelacionesVictimasService],
    }).compile();

    service = module.get<TiposRelacionesVictimasService>(TiposRelacionesVictimasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
