import { HttpStatus, Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

const logger = new Logger('BackendSUGC');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableVersioning({ defaultVersion: '1', type: VersioningType.URI });
  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    }),
  );
  // esta linea esta comentada para : [app.useGlobalGuards(new JwtAuthGuard(app.get(Reflector)));]

  const config = new DocumentBuilder()
    .setTitle('Sistema Único de Gestión de Causas')
    .setDescription('API Gateway del SUGC - Órgano Judicial')
    .setVersion('1.0')
    .addTag('')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
      description:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY5MzM0MjA2MywiZXhwIjoxNjk1OTM0MDYzfQ.haT3uR2ylsuBHcqgzJLB2ShDjG0wpKHjg_UV3qLbwV8',
    })
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apidoc', app, document, {
    swaggerOptions: { filter: true, displayRequestDuration: true },
  });
  await app.listen(process.env.APP_PORT);
  logger.verbose(`Application is running on: ${await app.getUrl()}/apidoc`);
}
(async (): Promise<void> => {
  await bootstrap();
})().catch((error: Error) => {
  logger.error(`Error GPTSJ: ${error.message}`);
});
