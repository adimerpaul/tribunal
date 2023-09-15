import { Test, TestingModule } from '@nestjs/testing';
import { TiposIdentidadesController } from './tipos-identidades.controller';
import { TiposIdentidadesService } from './tipos-identidades.service';

describe.skip('TiposIdentidadesController', () => {
  let controller: TiposIdentidadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposIdentidadesController],
      providers: [TiposIdentidadesService],
    }).compile();

    controller = module.get<TiposIdentidadesController>(TiposIdentidadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
