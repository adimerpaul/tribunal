import { Test, TestingModule } from '@nestjs/testing';
import { CausaDelitosController } from './causa-delitos.controller';
import { CausaDelitosService } from './causa-delitos.service';

describe.skip('CausaDelitosController', () => {
  let controller: CausaDelitosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CausaDelitosController],
      providers: [CausaDelitosService],
    }).compile();

    controller = module.get<CausaDelitosController>(CausaDelitosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
