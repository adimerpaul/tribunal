import { Test, TestingModule } from '@nestjs/testing';
import { CausasPrecedentesController } from './causas-precedentes.controller';
import { CausasPrecedentesService } from './causas-precedentes.service';

describe.skip('CausasPrecedentesController', () => {
  let controller: CausasPrecedentesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CausasPrecedentesController],
      providers: [CausasPrecedentesService],
    }).compile();

    controller = module.get<CausasPrecedentesController>(CausasPrecedentesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
