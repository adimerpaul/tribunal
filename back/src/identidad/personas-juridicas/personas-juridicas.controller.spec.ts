import { Test, TestingModule } from '@nestjs/testing';
import { PersonasJuridicasController } from './personas-juridicas.controller';
import { PersonasJuridicasService } from './personas-juridicas.service';

describe.skip('PersonasJuridicasController', () => {
  let controller: PersonasJuridicasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonasJuridicasController],
      providers: [PersonasJuridicasService],
    }).compile();

    controller = module.get<PersonasJuridicasController>(PersonasJuridicasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
