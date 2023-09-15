import { Test, TestingModule } from '@nestjs/testing';
import { OficinasEstadosController } from './oficinas-estados.controller';
import { OficinasEstadosService } from './oficinas-estados.service';

describe.skip('OficinasEstadosController', () => {
  let controller: OficinasEstadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OficinasEstadosController],
      providers: [OficinasEstadosService],
    }).compile();

    controller = module.get<OficinasEstadosController>(OficinasEstadosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
