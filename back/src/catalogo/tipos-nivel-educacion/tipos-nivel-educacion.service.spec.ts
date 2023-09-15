import { Test, TestingModule } from '@nestjs/testing';
import { TiposNivelEducacionService } from './tipos-nivel-educacion.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoNivelEducacionRepository } from './repositories/tipo-nivel-educacion.repository';

describe.skip('TiposNivelEducacionService', () => {
  let service: TiposNivelEducacionService;
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
        TypeOrmModule.forFeature([TipoNivelEducacionRepository]),
      ],
      providers: [TiposNivelEducacionService, TipoNivelEducacionRepository],
      exports: [TipoNivelEducacionRepository],
    }).compile();

    service = module.get<TiposNivelEducacionService>(TiposNivelEducacionService);
  });
  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
