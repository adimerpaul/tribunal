import { Test, TestingModule } from '@nestjs/testing';
import { TiposMedidasProteccionService } from './tipos-medidas-proteccion.service';

describe.skip('TiposMedidasProteccionService', () => {
  let service: TiposMedidasProteccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposMedidasProteccionService],
    }).compile();

    service = module.get<TiposMedidasProteccionService>(TiposMedidasProteccionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
