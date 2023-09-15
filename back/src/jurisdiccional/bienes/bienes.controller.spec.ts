import { Test, TestingModule } from '@nestjs/testing';
import { BienesController } from './bienes.controller';
import { BienesService } from './bienes.service';

describe.skip('BienesController', () => {
  let controller: BienesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BienesController],
      providers: [BienesService],
    }).compile();

    controller = module.get<BienesController>(BienesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
