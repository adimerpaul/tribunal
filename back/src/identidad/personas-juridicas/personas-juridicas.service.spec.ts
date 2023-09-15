import { Test, TestingModule } from '@nestjs/testing';
import { PersonasJuridicasService } from './personas-juridicas.service';

describe.skip('PersonasJuridicasService', () => {
  let service: PersonasJuridicasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonasJuridicasService],
    }).compile();

    service = module.get<PersonasJuridicasService>(PersonasJuridicasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
