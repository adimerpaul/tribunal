import { Test, TestingModule } from '@nestjs/testing';
import { CompetenciasOrganizacionalesService } from './competencias-organizacionales.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetenciaOrganizacionalRepository } from './repositories/competencia-organizacional.repository';

describe('CompetenciasOrganizacionalesService', () => {
  let service: CompetenciasOrganizacionalesService;
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
        TypeOrmModule.forFeature([CompetenciaOrganizacionalRepository]),
      ],
      providers: [CompetenciasOrganizacionalesService, CompetenciaOrganizacionalRepository],
      exports: [CompetenciaOrganizacionalRepository],
    }).compile();

    service = module.get<CompetenciasOrganizacionalesService>(CompetenciasOrganizacionalesService);
  });
  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
