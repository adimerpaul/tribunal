import { Test, TestingModule } from '@nestjs/testing';
import { TipoPlantillaService } from './tipos-plantillas.service';

describe.skip('TiposPlantillasService', () => {
  let service: TipoPlantillaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoPlantillaService],
    }).compile();

    service = module.get<TipoPlantillaService>(TipoPlantillaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
