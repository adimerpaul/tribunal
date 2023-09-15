import { Test, TestingModule } from '@nestjs/testing';
import { TiposGradosDiscapacidadesController } from './tipos-grados-discapacidades.controller';
import { TiposGradosDiscapacidadesService } from './tipos-grados-discapacidades.service';

describe.skip('TiposGradosDiscapacidadesController', () => {
  let controller: TiposGradosDiscapacidadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposGradosDiscapacidadesController],
      providers: [TiposGradosDiscapacidadesService],
    }).compile();

    controller = module.get<TiposGradosDiscapacidadesController>(TiposGradosDiscapacidadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
