import { Test, TestingModule } from '@nestjs/testing';
import { TiposRelacionesVictimasController } from './tipos-relaciones-victimas.controller';
import { TiposRelacionesVictimasService } from './tipos-relaciones-victimas.service';

describe.skip('TiposRelacionesVictimasController', () => {
  let controller: TiposRelacionesVictimasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposRelacionesVictimasController],
      providers: [TiposRelacionesVictimasService],
    }).compile();

    controller = module.get<TiposRelacionesVictimasController>(TiposRelacionesVictimasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
