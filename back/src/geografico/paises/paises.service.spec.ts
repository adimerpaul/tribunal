import { Test, TestingModule } from '@nestjs/testing';
import { PaisesService } from './paises.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaisRepository } from './repositories/pais.repository';

describe('PaisesService', () => {
  let service: PaisesService;
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
        TypeOrmModule.forFeature([PaisRepository]),
      ],
      providers: [PaisesService, PaisRepository],
      exports: [PaisRepository],
    }).compile();

    service = module.get<PaisesService>(PaisesService);
  });
  afterAll(async () => {
    await module.close();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });
});
