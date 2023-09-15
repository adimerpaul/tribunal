import { Test, TestingModule } from '@nestjs/testing';
import { CiudadesService } from './ciudades.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from 'src/infraestructure/database/config';
import { CiudadRepository } from './repositories/ciudad.repository';

describe('CiudadesService', () => {
  let service: CiudadesService;
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
        TypeOrmModule.forFeature([CiudadRepository]),
      ],
      providers: [CiudadesService, CiudadRepository],
      exports: [CiudadRepository],
    }).compile();

    service = module.get<CiudadesService>(CiudadesService);
  });
  afterAll(async () => {
    await module.close();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });
});
