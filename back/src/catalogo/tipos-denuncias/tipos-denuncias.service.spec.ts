import { Test, TestingModule } from '@nestjs/testing';
import { TiposDenunciasService } from './tipos-denuncias.service';

describe.skip('TiposDenunciasService', () => {
  let service: TiposDenunciasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposDenunciasService],
    }).compile();

    service = module.get<TiposDenunciasService>(TiposDenunciasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
