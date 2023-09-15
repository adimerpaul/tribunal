import { Test, TestingModule } from '@nestjs/testing';
import { PersonasDetallesService } from './personas-detalles.service';

describe.skip('PersonasDetallesService', () => {
  let service: PersonasDetallesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonasDetallesService],
    }).compile();

    service = module.get<PersonasDetallesService>(PersonasDetallesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
