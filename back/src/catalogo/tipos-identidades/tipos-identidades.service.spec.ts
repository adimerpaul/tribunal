import { Test, TestingModule } from '@nestjs/testing';
import { TiposIdentidadesService } from './tipos-identidades.service';

describe.skip('TiposIdentidadesService', () => {
  let service: TiposIdentidadesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposIdentidadesService],
    }).compile();

    service = module.get<TiposIdentidadesService>(TiposIdentidadesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
