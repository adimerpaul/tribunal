import { Test, TestingModule } from '@nestjs/testing';
import { TiposMedidasProteccionController } from './tipos-medidas-proteccion.controller';
import { TiposMedidasProteccionService } from './tipos-medidas-proteccion.service';

describe.skip('TiposMedidasProteccionController', () => {
  let controller: TiposMedidasProteccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposMedidasProteccionController],
      providers: [TiposMedidasProteccionService],
    }).compile();

    controller = module.get<TiposMedidasProteccionController>(TiposMedidasProteccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
