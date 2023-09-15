import { Test, TestingModule } from '@nestjs/testing';
import { RolesService } from './roles.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolRepository } from './repositories/rol.repository';
import { MenusModule } from '../menus/menus.module';
import { PermisosModule } from '../permisos/permisos.module';

describe('RolesService', () => {
  let service: RolesService;
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
        TypeOrmModule.forFeature([RolRepository]),
        MenusModule,
        PermisosModule,
      ],
      providers: [RolesService, RolRepository],
      exports: [RolRepository],
    }).compile();

    service = module.get<RolesService>(RolesService);
  });

  afterAll(async () => {
    await module.close();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });
});
