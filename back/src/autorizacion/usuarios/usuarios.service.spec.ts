import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosService } from './usuarios.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosRepository } from './repositories/usuarios.repository';
import { RolesModule } from '../roles/roles.module';
import { PersonasModule } from 'src/identidad/personas/personas.module';

describe('UsuariosService', () => {
  let service: UsuariosService;
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
        TypeOrmModule.forFeature([UsuariosRepository]),
        PersonasModule,
        RolesModule,
      ],

      providers: [UsuariosService, UsuariosRepository],
      exports: [UsuariosRepository],
    }).compile();

    service = module.get<UsuariosService>(UsuariosService);
  });

  afterAll(async () => {
    await module.close();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });
});
