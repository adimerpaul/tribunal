import { Test, TestingModule } from '@nestjs/testing';
import { MunicipiosService } from './municipios.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MunicipioRepository } from './repositories/municipio.repository';

describe('MunicipiosService', () => {
  let service: MunicipiosService;
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
        TypeOrmModule.forFeature([MunicipioRepository]),
      ],
      providers: [MunicipiosService, MunicipioRepository],
      exports: [MunicipioRepository],
    }).compile();

    service = module.get<MunicipiosService>(MunicipiosService);
  });

  afterAll(async () => {
    await module.close();
  });

  it('debe esta definido', () => {
    expect(service).toBeDefined();
  });
});
