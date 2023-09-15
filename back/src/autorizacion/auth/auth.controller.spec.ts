import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEnum } from 'src/common/constants/message.enum';
import { PersonasModule } from 'src/identidad/personas/personas.module';
import { configuration } from 'src/infraestructure/database/config';
import { MenusModule } from '../menus/menus.module';
import { RolesModule } from '../roles/roles.module';
import { UsuariosEntity } from '../usuarios/entities/usuario.entity';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy, LocalStrategy } from './strategies';
import { RefreshTokenStrategy } from './strategies/jwt-refresh.strategy';
import { UsuariosRepository } from 'src/autorizacion/usuarios/repositories/usuarios.repository';

describe('AuthController', () => {
  let controller: AuthController;
  let module: TestingModule;

  const usuario = 'admin';
  const clave = 'hola123';
  const authLoginDto = { usuario, clave };
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

        JwtModule.registerAsync({
          useFactory: () => ({
            secret: process.env.AT_JWT_SECRET,
            signOptions: { expiresIn: process.env.AT_JWT_TIME },
          }),
        }),
        PassportModule,
        UsuariosModule,
        RolesModule,
        MenusModule,
        PersonasModule,
      ],
      controllers: [AuthController],
      providers: [AuthService, LocalStrategy, JwtStrategy, RefreshTokenStrategy, UsuariosRepository],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  afterAll(async () => {
    await module.close();
  });

  it('debe estar definido', () => {
    expect(controller).toBeDefined();
  });

  describe('login', () => {
    it('debe autenticar con éxito un usuario válido', async () => {
      const usuario = new UsuariosEntity();
      usuario.id = 1;
      const respuesta = await controller.login(authLoginDto, usuario);
      expect(respuesta).toHaveProperty('message', MessageEnum.AUTHENTICATED);
      expect(respuesta).not.toHaveProperty('response', expect.any(UsuariosEntity));
    });
  });
});
