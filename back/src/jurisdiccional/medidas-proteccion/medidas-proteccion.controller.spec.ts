import { Test, TestingModule } from '@nestjs/testing';
import { MedidasProteccionController } from './medidas-proteccion.controller';
import { MedidasProteccionService } from './medidas-proteccion.service';

describe.skip('MedidasProteccionController', () => {
  let controller: MedidasProteccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedidasProteccionController],
      providers: [MedidasProteccionService],
    }).compile();

    controller = module.get<MedidasProteccionController>(MedidasProteccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
