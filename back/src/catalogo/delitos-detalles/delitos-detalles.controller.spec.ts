import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DelitosDetallesService } from './delitos-detalles.service';
import { DelitosDetallesController } from './delitos-detalles.controller';
import { DelitosDetallesRepository } from './repositories/delitos-detalles.repository';

describe('DelitosDetallesController', () => {
  let controller: DelitosDetallesController;

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
        TypeOrmModule.forFeature([DelitosDetallesRepository]),
      ],
      controllers: [DelitosDetallesController],
      providers: [DelitosDetallesService, DelitosDetallesRepository],
    }).compile();

    controller = module.get<DelitosDetallesController>(DelitosDetallesController);
  });

  it('debe estar definido', () => {
    expect(controller).toBeDefined();
  });
  describe('findAll', () => {
    it('obtener paises', async () => {
      const mensaje = await controller.findAll();
      console.log(mensaje);

      expect(mensaje).toEqual(expect.any(Array));
    });
  });
});


