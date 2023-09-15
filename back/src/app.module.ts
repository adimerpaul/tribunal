import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JurisdiccionalModule } from './jurisdiccional/jurisdiccional.module';
import { IdentidadModule } from './identidad/identidad.module';
import { OrganizacionalModule } from './organizacional/organizacional.module';
import { GeograficoModule } from './geografico/geografico.module';
import { AutorizacionModule } from './autorizacion/autorizacion.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from './infraestructure/database/config';
import { CatalogoModule } from './catalogo/catalogo.module';
import { HttpResponseInterceptor } from './common/interceptors/http-response/http-response.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { PermissionMiddleware } from './common/middlewares/permission/permission.middleware';
import { PermisosService } from './autorizacion/permisos/permisos.service';
import { PermisoRepository } from './autorizacion/permisos/repositories/permiso.repository';
import { InteroperabilidadModule } from './interoperabilidad/interoperabilidad.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        ...config.get('db'),
      }),
      inject: [ConfigService],
    }),
    JurisdiccionalModule,
    IdentidadModule,
    OrganizacionalModule,
    GeograficoModule,
    CatalogoModule,
    AutorizacionModule,
    InteroperabilidadModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpResponseInterceptor,
    },
    PermisosService,
    PermisoRepository,
  ],
})
export class AppModule implements NestModule {
  static port: number | string;

  constructor(private readonly configService: ConfigService) {
    AppModule.port = this.configService.get('PORT');
  }
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PermissionMiddleware).forRoutes('*');
  }
}
