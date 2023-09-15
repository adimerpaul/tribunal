import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from 'src/infraestructure/database/config';
import { UsuariosRepository } from './repositories/usuarios.repository';
import { RolesModule } from '../roles/roles.module';
import { PersonasModule } from 'src/identidad/personas/personas.module';

describe('UsuariosController', () => {
  let module: TestingModule;
  let controller: UsuariosController;
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
      controllers: [UsuariosController],
      providers: [UsuariosService, UsuariosRepository],
      exports: [UsuariosRepository],
    }).compile();

    controller = module.get<UsuariosController>(UsuariosController);
  });

  afterAll(async () => {
    await module.close();
  });

  it('debe estar definido', () => {
    expect(controller).toBeDefined();
  });
});
