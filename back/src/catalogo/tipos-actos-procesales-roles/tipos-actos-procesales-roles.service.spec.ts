import { Test, TestingModule } from '@nestjs/testing';
import { TiposActosProcesalesRolesService } from './tipos-actos-procesales-roles.service';

describe.skip('TiposActosProcesalesRolesService', () => {
  let service: TiposActosProcesalesRolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposActosProcesalesRolesService],
    }).compile();

    service = module.get<TiposActosProcesalesRolesService>(TiposActosProcesalesRolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
