import { Test, TestingModule } from '@nestjs/testing';
import { TiposGruposVulnerablesController } from './tipos-grupos-vulnerables.controller';
import { TiposGruposVulnerablesService } from './tipos-grupos-vulnerables.service';

describe.skip('TiposGruposVulnerablesController', () => {
  let controller: TiposGruposVulnerablesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposGruposVulnerablesController],
      providers: [TiposGruposVulnerablesService],
    }).compile();

    controller = module.get<TiposGruposVulnerablesController>(TiposGruposVulnerablesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
