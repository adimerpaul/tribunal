import { Test, TestingModule } from '@nestjs/testing';
import { TiposActosProcesalesAreasOrganizacionalesService } from './tipos-actos-procesales-areas-organizacionales.service';

describe.skip('TiposActosProcesalesAreasOrganizacionalesService', () => {
  let service: TiposActosProcesalesAreasOrganizacionalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposActosProcesalesAreasOrganizacionalesService],
    }).compile();

    service = module.get<TiposActosProcesalesAreasOrganizacionalesService>(
      TiposActosProcesalesAreasOrganizacionalesService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
