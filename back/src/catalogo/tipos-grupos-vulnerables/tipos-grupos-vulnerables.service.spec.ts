import { Test, TestingModule } from '@nestjs/testing';
import { TiposGruposVulnerablesService } from './tipos-grupos-vulnerables.service';

describe.skip('TiposGruposVulnerablesService', () => {
  let service: TiposGruposVulnerablesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposGruposVulnerablesService],
    }).compile();

    service = module.get<TiposGruposVulnerablesService>(TiposGruposVulnerablesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
