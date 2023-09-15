import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubGrupoDelitosService } from './subgrupos-delitos.service';
import { SubGrupoDelitoRepository } from './repositories/subgrupo-delito.repository';

describe('SubgruposDelitosService', () => {
  let service: SubGrupoDelitosService;
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
        TypeOrmModule.forFeature([SubGrupoDelitoRepository]),
      ],
      providers: [SubGrupoDelitosService, SubGrupoDelitoRepository],
      exports: [SubGrupoDelitoRepository],
    }).compile();

    service = module.get<SubGrupoDelitosService>(SubGrupoDelitosService);
  });
  afterAll(async () => {
    await module.close();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });
});

