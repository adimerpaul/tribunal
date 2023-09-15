import { Test, TestingModule } from '@nestjs/testing';
import { PersonasIdiomasController } from './personas-idiomas.controller';
import { PersonasIdiomasService } from './personas-idiomas.service';

describe.skip('PersonasIdiomasController', () => {
  let controller: PersonasIdiomasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonasIdiomasController],
      providers: [PersonasIdiomasService],
    }).compile();

    controller = module.get<PersonasIdiomasController>(PersonasIdiomasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
