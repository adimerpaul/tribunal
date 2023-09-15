import { Test, TestingModule } from '@nestjs/testing';
import { ProvinciasService } from './provincias.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinciaRepository } from './repositories/provincia.repository';

describe('ProvinciasService', () => {
  let service: ProvinciasService;
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
        TypeOrmModule.forFeature([ProvinciaRepository]),
      ],
      providers: [ProvinciasService, ProvinciaRepository],
      exports: [ProvinciaRepository],
    }).compile();

    service = module.get<ProvinciasService>(ProvinciasService);
  });

  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
