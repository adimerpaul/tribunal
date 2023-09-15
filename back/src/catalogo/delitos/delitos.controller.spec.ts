import { Test, TestingModule } from '@nestjs/testing';
import { DelitosController } from './delitos.controller';
import { DelitosService } from './delitos.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from 'src/infraestructure/database/config';
import { DelitoRepository } from './repositories/delito.repository';

describe('DelitosController', () => {
  let controller: DelitosController;

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
        TypeOrmModule.forFeature([DelitoRepository]),
      ],
      controllers: [DelitosController],
      providers: [DelitosService, DelitoRepository],
    }).compile();

    controller = module.get<DelitosController>(DelitosController);
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
