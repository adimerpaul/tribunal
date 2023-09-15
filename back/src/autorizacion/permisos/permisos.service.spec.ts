import { Test, TestingModule } from '@nestjs/testing';
import { PermisosService } from './permisos.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermisoRepository } from './repositories/permiso.repository';

describe('PermisosService', () => {
  let service: PermisosService;
  let module: TestingModule;

  beforeAll(async () => {
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
        TypeOrmModule.forFeature([PermisoRepository]),
      ],

      providers: [PermisosService, PermisoRepository],
      exports: [PermisoRepository],
    }).compile();

    service = module.get<PermisosService>(PermisosService);
  });

  afterAll(async () => {
    await module.close();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });
});
