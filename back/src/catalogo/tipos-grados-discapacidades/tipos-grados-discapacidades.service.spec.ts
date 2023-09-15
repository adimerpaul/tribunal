import { Test, TestingModule } from '@nestjs/testing';
import { TiposGradosDiscapacidadesService } from './tipos-grados-discapacidades.service';

describe.skip('TiposGradosDiscapacidadesService', () => {
  let service: TiposGradosDiscapacidadesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposGradosDiscapacidadesService],
    }).compile();

    service = module.get<TiposGradosDiscapacidadesService>(TiposGradosDiscapacidadesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
