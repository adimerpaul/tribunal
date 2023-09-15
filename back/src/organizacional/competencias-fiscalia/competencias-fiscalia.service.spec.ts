import { Test, TestingModule } from '@nestjs/testing';
import { CompetenciasFiscaliaService } from './competencias-fiscalia.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetenciaFiscaliaRepository } from './repositories/competencia-fiscalia.repository';

describe('CompetenciasFiscaliaService', () => {
  let service: CompetenciasFiscaliaService;
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
        TypeOrmModule.forFeature([CompetenciaFiscaliaRepository]),
      ],
      providers: [CompetenciasFiscaliaService, CompetenciaFiscaliaRepository],
      exports: [CompetenciaFiscaliaRepository],
    }).compile();

    service = module.get<CompetenciasFiscaliaService>(CompetenciasFiscaliaService);
  });
  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
