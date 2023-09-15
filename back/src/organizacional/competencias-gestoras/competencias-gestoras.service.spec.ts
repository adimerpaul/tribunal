import { Test, TestingModule } from '@nestjs/testing';
import { CompetenciasGestorasService } from './competencias-gestoras.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetenciaGestoraRepository } from './repositories/competencia-gestora.repository';

describe.skip('CompetenciasGestorasService', () => {
  let service: CompetenciasGestorasService;
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
        TypeOrmModule.forFeature([CompetenciaGestoraRepository]),
      ],
      providers: [CompetenciasGestorasService],
      exports: [CompetenciaGestoraRepository],
    }).compile();

    service = module.get<CompetenciasGestorasService>(CompetenciasGestorasService);
  });
  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
