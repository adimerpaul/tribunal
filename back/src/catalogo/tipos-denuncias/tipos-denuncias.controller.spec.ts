import { Test, TestingModule } from '@nestjs/testing';
import { TiposDenunciasController } from './tipos-denuncias.controller';
import { TiposDenunciasService } from './tipos-denuncias.service';

describe.skip('TiposDenunciasController', () => {
  let controller: TiposDenunciasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposDenunciasController],
      providers: [TiposDenunciasService],
    }).compile();

    controller = module.get<TiposDenunciasController>(TiposDenunciasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
