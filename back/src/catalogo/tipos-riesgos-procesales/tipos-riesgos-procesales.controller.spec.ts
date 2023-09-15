import { Test, TestingModule } from '@nestjs/testing';
import { TiposRiesgosProcesalesController } from './tipos-riesgos-procesales.controller';
import { TiposRiesgosProcesalesService } from './tipos-riesgos-procesales.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from 'src/infraestructure/database/config';
import { TipoRiesgoProcesalRepository } from './repositories/tipo-riesgo-procesal.repository';

describe('PaisesController', () => {
  let controller: TiposRiesgosProcesalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: ['.env'],
          isGlobal: true,
          load: [configuration],
        }),
        TypeOrmModule.forRootAsync({
          useFactory: (config: ConfigService) => ({
            ...config.get('db'),
          }),
          inject: [ConfigService],
        }),
        TypeOrmModule.forFeature([TipoRiesgoProcesalRepository]),
      ],
      controllers: [TiposRiesgosProcesalesController],
      providers: [TiposRiesgosProcesalesService, TipoRiesgoProcesalRepository],
    }).compile();

    controller = module.get<TiposRiesgosProcesalesController>(TiposRiesgosProcesalesController);
  });

  it('debe estar definido', () => {
    expect(controller).toBeDefined();
  });
  describe('findAll', () => {
    it('obtener paises', async () => {
      const mensaje = await controller.findAll();
      console.log(mensaje);

      expect(mensaje).toEqual(expect.any(Array));
    });
  });
});
