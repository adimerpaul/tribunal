import { Test, TestingModule } from '@nestjs/testing';
import { TiposNivelEducacionController } from './tipos-nivel-educacion.controller';
import { TiposNivelEducacionService } from './tipos-nivel-educacion.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoNivelEducacionRepository } from './repositories/tipo-nivel-educacion.repository';

describe.skip('TiposNivelEducacionController', () => {
  let controller: TiposNivelEducacionController;

  beforeEach(async () => {
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
        TypeOrmModule.forFeature([TipoNivelEducacionRepository]),
      ],
      controllers: [TiposNivelEducacionController],
      providers: [TiposNivelEducacionService, TipoNivelEducacionRepository],
    }).compile();

    controller = module.get<TiposNivelEducacionController>(TiposNivelEducacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('findAll', () => {
    it('obtener tipos de nivel de educacion', async () => {
      const mensaje = await controller.findAll();
      console.log(mensaje);

      expect(mensaje).toEqual(expect.any(Array));
    });
  });
});
