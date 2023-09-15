import { Test, TestingModule } from '@nestjs/testing';
import { PersonasIdiomasService } from './personas-idiomas.service';

describe.skip('PersonasIdiomasService', () => {
  let service: PersonasIdiomasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonasIdiomasService],
    }).compile();

    service = module.get<PersonasIdiomasService>(PersonasIdiomasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
