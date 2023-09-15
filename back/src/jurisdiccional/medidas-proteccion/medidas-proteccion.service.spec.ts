import { Test, TestingModule } from '@nestjs/testing';
import { MedidasProteccionService } from './medidas-proteccion.service';

describe.skip('MedidasProteccionService', () => {
  let service: MedidasProteccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedidasProteccionService],
    }).compile();

    service = module.get<MedidasProteccionService>(MedidasProteccionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
