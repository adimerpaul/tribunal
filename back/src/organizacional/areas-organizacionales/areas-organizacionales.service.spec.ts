import { Test, TestingModule } from '@nestjs/testing';
import { AreasOrganizacionalesService } from './areas-organizacionales.service';

describe.skip('AreasOrganizacionalesService', () => {
  let service: AreasOrganizacionalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AreasOrganizacionalesService],
    }).compile();

    service = module.get<AreasOrganizacionalesService>(AreasOrganizacionalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
