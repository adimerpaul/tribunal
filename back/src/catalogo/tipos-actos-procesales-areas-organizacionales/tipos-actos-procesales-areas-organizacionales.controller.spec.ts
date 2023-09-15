import { Test, TestingModule } from '@nestjs/testing';
import { TiposActosProcesalesAreasOrganizacionalesController } from './tipos-actos-procesales-areas-organizacionales.controller';
import { TiposActosProcesalesAreasOrganizacionalesService } from './tipos-actos-procesales-areas-organizacionales.service';

describe.skip('TiposActosProcesalesAreasOrganizacionalesController', () => {
  let controller: TiposActosProcesalesAreasOrganizacionalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposActosProcesalesAreasOrganizacionalesController],
      providers: [TiposActosProcesalesAreasOrganizacionalesService],
    }).compile();

    controller = module.get<TiposActosProcesalesAreasOrganizacionalesController>(
      TiposActosProcesalesAreasOrganizacionalesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
