import { Test, TestingModule } from '@nestjs/testing';
import { GruposDelitosService } from './grupos-delitos.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoDelitoRepository } from './repositories/grupo-delito.repository';

describe('GruposDelitosService', () => {
  let service: GruposDelitosService;
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
        TypeOrmModule.forFeature([GrupoDelitoRepository]),
      ],
      providers: [GruposDelitosService, GrupoDelitoRepository],
      exports: [GrupoDelitoRepository],
    }).compile();

    service = module.get<GruposDelitosService>(GruposDelitosService);
  });
  afterAll(async () => {
    await module.close();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });
});

