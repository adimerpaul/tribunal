import { Test, TestingModule } from '@nestjs/testing';
import { AudienciasController } from './audiencias.controller';
import { AudienciasService } from './audiencias.service';

describe.skip('AudienciasController', () => {
  let controller: AudienciasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AudienciasController],
      providers: [AudienciasService],
    }).compile();

    controller = module.get<AudienciasController>(AudienciasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
