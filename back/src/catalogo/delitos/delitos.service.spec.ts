import { Test, TestingModule } from '@nestjs/testing';
import { DelitosService } from './delitos.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DelitoRepository } from './repositories/delito.repository';

describe('DelitosService', () => {
  let service: DelitosService;
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
        TypeOrmModule.forFeature([DelitoRepository]),
      ],
      providers: [DelitosService, DelitoRepository],
      exports: [DelitoRepository],
    }).compile();

    service = module.get<DelitosService>(DelitosService);
  });
  afterAll(async () => {
    await module.close();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });
});


