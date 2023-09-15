import { Test, TestingModule } from '@nestjs/testing';
import { TiposActosProcesalesRolesController } from './tipos-actos-procesales-roles.controller';
import { TiposActosProcesalesRolesService } from './tipos-actos-procesales-roles.service';

describe.skip('TiposActosProcesalesRolesController', () => {
  let controller: TiposActosProcesalesRolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposActosProcesalesRolesController],
      providers: [TiposActosProcesalesRolesService],
    }).compile();

    controller = module.get<TiposActosProcesalesRolesController>(TiposActosProcesalesRolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
