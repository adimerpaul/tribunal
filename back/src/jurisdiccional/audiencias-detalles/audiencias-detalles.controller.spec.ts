import { Test, TestingModule } from '@nestjs/testing';
import { AudienciasDetallesController } from './audiencias-detalles.controller';
import { AudienciasDetallesService } from './audiencias-detalles.service';

describe.skip('AudienciasDetallesController', () => {
  let controller: AudienciasDetallesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AudienciasDetallesController],
      providers: [AudienciasDetallesService],
    }).compile();

    controller = module.get<AudienciasDetallesController>(AudienciasDetallesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
