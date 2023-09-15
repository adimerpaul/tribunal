import { Test, TestingModule } from '@nestjs/testing';
import { PersonasDomiciliosController } from './personas-domicilios.controller';
import { PersonasDomiciliosService } from './personas-domicilios.service';

describe.skip('PersonasDomiciliosController', () => {
  let controller: PersonasDomiciliosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonasDomiciliosController],
      providers: [PersonasDomiciliosService],
    }).compile();

    controller = module.get<PersonasDomiciliosController>(PersonasDomiciliosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
