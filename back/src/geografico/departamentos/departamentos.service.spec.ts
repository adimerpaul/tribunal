import { Test, TestingModule } from '@nestjs/testing';
import { DepartamentosService } from './departamentos.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartamentoRepository } from './repositories/departamento.repository';

describe.skip('DepartamentosService', () => {
  let service: DepartamentosService;
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
        TypeOrmModule.forFeature([DepartamentoRepository]),
      ],

      providers: [DepartamentosService, DepartamentoRepository],
      exports: [DepartamentoRepository],
    }).compile();

    service = module.get<DepartamentosService>(DepartamentosService);
  });
  afterAll(async () => {
    await module.close();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });
});
