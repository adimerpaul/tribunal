import { Test, TestingModule } from '@nestjs/testing';
import { AudienciasDetallesExternasController } from './audiencias-detalles-externas.controller';
import { AudienciasDetallesExternasService } from './audiencias-detalles-externas.service';

describe.skip('AudienciasDetallesExternasController', () => {
  let controller: AudienciasDetallesExternasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AudienciasDetallesExternasController],
      providers: [AudienciasDetallesExternasService],
    }).compile();

    controller = module.get<AudienciasDetallesExternasController>(AudienciasDetallesExternasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
