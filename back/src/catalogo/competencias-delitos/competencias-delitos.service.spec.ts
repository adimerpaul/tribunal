import { Test, TestingModule } from '@nestjs/testing';
import { CompetenciasDelitosService } from './competencias-delitos.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetenciasDelitosRepository } from './repositories/competencia-delito.repository';

describe('CompetenciasDelitosService', () => {
  let service: CompetenciasDelitosService;
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
        TypeOrmModule.forFeature([CompetenciasDelitosRepository]),
      ],
      providers: [CompetenciasDelitosService, CompetenciasDelitosRepository],
      exports: [CompetenciasDelitosRepository],
    }).compile();

    service = module.get<CompetenciasDelitosService>(CompetenciasDelitosService);
  });
  afterAll(async () => {
    await module.close();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });
});


