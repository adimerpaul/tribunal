import { Test, TestingModule } from '@nestjs/testing';
import { TiposSuspensionesAudienciasController } from './tipos-suspensiones-audiencias.controller';
import { TiposSuspensionesAudienciasService } from './tipos-suspensiones-audiencias.service';

describe.skip('TiposSuspensionesAudienciasController', () => {
  let controller: TiposSuspensionesAudienciasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposSuspensionesAudienciasController],
      providers: [TiposSuspensionesAudienciasService],
    }).compile();

    controller = module.get<TiposSuspensionesAudienciasController>(TiposSuspensionesAudienciasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
