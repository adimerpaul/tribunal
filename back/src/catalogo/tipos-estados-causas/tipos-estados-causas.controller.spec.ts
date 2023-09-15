import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from 'src/infraestructure/database/config';
import { TipoEstadoCausaRepository } from './repositories/tipo-estado-causa.repository';
import { TiposEstadosCausasController } from './tipos-estados-causas.controller';
import { TiposEstadosCausasService } from './tipos-estados-causas.service';

describe.skip('TiposEstadosCausasController', () => {
  let controller: TiposEstadosCausasController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
        TypeOrmModule.forFeature([TipoEstadoCausaRepository]),
      ],
      controllers: [TiposEstadosCausasController],
      providers: [TiposEstadosCausasService, TipoEstadoCausaRepository],
    }).compile();

    controller = module.get<TiposEstadosCausasController>(TiposEstadosCausasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
