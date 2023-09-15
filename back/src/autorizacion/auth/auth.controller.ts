import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/autorizacion/auth/auth.service';
import { GetCurrentUser, GetCurrentUserId, Public } from 'src/autorizacion/auth/decorators';
import { AuthLoginDto } from 'src/autorizacion/auth/dto/auth-login.dto';
import { JwtAuthGuard, LocalAuthGuard, RefreshTokenGuard } from 'src/autorizacion/auth/guards';
import { UsuariosEntity } from 'src/autorizacion/usuarios/entities/usuario.entity';
import { UsuarioDecorator } from 'src/common/decorators/user.decorator';

@Controller('auth')
@ApiTags('[Autorización] - Auth')
@ApiBearerAuth()
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @Public()
  @ApiOperation({
    summary: 'Proceso de Autenticación de un Usuario',
    description: 'usuario: 123456 y test',
  })
  login(@Body() peticion: AuthLoginDto, @UsuarioDecorator() user?: UsuariosEntity) {
    return this.authService.login(user);
  }

  @Public()
  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  refreshTokens(@GetCurrentUserId() userId: number, @GetCurrentUser('refreshToken') refreshToken: string) {
    return this.authService.refreshTokens(userId, refreshToken);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  logout(@UsuarioDecorator() user: UsuariosEntity): Promise<boolean> {
    return this.authService.logout(user.id);
  }
}
