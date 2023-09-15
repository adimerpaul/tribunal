import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'usuario',
      passwordField: `clave`,
    });
  }
  async validate(usuario: string, clave: string) {
    const user = await this.authService.validateUser(usuario, clave);
    if (!user) throw new UnauthorizedException('Login user or password does not match.');
    return user;
  }
}
