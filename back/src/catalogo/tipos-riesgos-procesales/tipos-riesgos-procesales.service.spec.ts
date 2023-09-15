import { Test, TestingModule } from '@nestjs/testing';
import { TiposRiesgosProcesalesService } from "./tipos-riesgos-procesales.service";
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoRiesgoProcesalRepository } from './repositories/tipo-riesgo-procesal.repository';

describe('TiposRiesgosProcesalesService', () => {
  let service: TiposRiesgosProcesalesService;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
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
      providers: [TiposRiesgosProcesalesService, TipoRiesgoProcesalRepository],
      exports: [TipoRiesgoProcesalRepository],
    }).compile();

    service = module.get<TiposRiesgosProcesalesService>(TiposRiesgosProcesalesService);
  });
  afterAll(async () => {
    await module.close();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });
});
