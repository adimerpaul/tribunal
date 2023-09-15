import { Test, TestingModule } from '@nestjs/testing';
import { PersonasDomiciliosService } from './personas-domicilios.service';

describe.skip('PersonasDomiciliosService', () => {
  let service: PersonasDomiciliosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonasDomiciliosService],
    }).compile();

    service = module.get<PersonasDomiciliosService>(PersonasDomiciliosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
