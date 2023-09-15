import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { JwtStrategy, LocalStrategy } from 'src/autorizacion/auth/strategies';
import { JwtModule } from '@nestjs/jwt';
import { RefreshTokenStrategy } from 'src/autorizacion/auth/strategies/jwt-refresh.strategy';
import { RolesModule } from '../roles/roles.module';
import { MenusModule } from '../menus/menus.module';
import { PersonasModule } from 'src/identidad/personas/personas.module';
import { UsuariosRepository } from 'src/autorizacion/usuarios/repositories/usuarios.repository';

@Module({
  imports: [
    PassportModule,
    UsuariosModule,
    RolesModule,
    MenusModule,
    PersonasModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.AT_JWT_SECRET,
        signOptions: { expiresIn: process.env.AT_JWT_TIME },
      }),
    }),
    // JwtModule.register({})
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, RefreshTokenStrategy, UsuariosRepository],
  controllers: [AuthController],
})
export class AuthModule { }
