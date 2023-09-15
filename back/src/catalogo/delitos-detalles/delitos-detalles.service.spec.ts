import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DelitosDetallesService } from './delitos-detalles.service';
import { DelitosDetallesRepository } from './repositories/delitos-detalles.repository';

describe('DelitosDetalleService', () => {
  let service: DelitosDetallesService;
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
        TypeOrmModule.forFeature([DelitosDetallesRepository]),
      ],
      providers: [DelitosDetallesService, DelitosDetallesRepository],
      exports: [DelitosDetallesRepository],
    }).compile();

    service = module.get<DelitosDetallesService>(DelitosDetallesService);
  });
  afterAll(async () => {
    await module.close();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });
});




