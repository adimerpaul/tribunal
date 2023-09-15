import { Test, TestingModule } from '@nestjs/testing';
import { PersonasDetallesController } from './personas-detalles.controller';
import { PersonasDetallesService } from './personas-detalles.service';

describe.skip('PersonasDetallesController', () => {
  let controller: PersonasDetallesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonasDetallesController],
      providers: [PersonasDetallesService],
    }).compile();

    controller = module.get<PersonasDetallesController>(PersonasDetallesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
