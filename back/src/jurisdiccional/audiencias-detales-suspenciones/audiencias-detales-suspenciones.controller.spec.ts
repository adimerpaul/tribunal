import { Test, TestingModule } from '@nestjs/testing';
import { AudienciasDetalesSuspencionesController } from './audiencias-detales-suspenciones.controller';
import { AudienciasDetalesSuspencionesService } from './audiencias-detales-suspenciones.service';

describe.skip('AudienciasDetalesSuspencionesController', () => {
  let controller: AudienciasDetalesSuspencionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AudienciasDetalesSuspencionesController],
      providers: [AudienciasDetalesSuspencionesService],
    }).compile();

    controller = module.get<AudienciasDetalesSuspencionesController>(AudienciasDetalesSuspencionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
