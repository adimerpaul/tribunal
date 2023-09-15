import { Test, TestingModule } from '@nestjs/testing';
import { IdiomasService } from './idiomas.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdiomaRepository } from './repositories/idioma.repository';

describe('IdiomasService', () => {
  let service: IdiomasService;
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
        TypeOrmModule.forFeature([IdiomaRepository]),
      ],
      providers: [IdiomasService, IdiomaRepository],
      exports: [IdiomaRepository],
    }).compile();

    service = module.get<IdiomasService>(IdiomasService);
  });

  afterAll(async () => {
    await module.close();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });
});
