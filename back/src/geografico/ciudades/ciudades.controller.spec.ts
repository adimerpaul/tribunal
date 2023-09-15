import { Test, TestingModule } from '@nestjs/testing';
import { CiudadesController } from './ciudades.controller';
import { CiudadesService } from './ciudades.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from 'src/infraestructure/database/config';
import { CiudadRepository } from './repositories/ciudad.repository';

describe('CiudadesController', () => {
  let controller: CiudadesController;
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
        TypeOrmModule.forFeature([CiudadRepository]),
      ],

      controllers: [CiudadesController],
      providers: [CiudadesService, CiudadRepository],
    }).compile();

    controller = module.get<CiudadesController>(CiudadesController);
  });

  it('debe estar definido', () => {
    expect(controller).toBeDefined();
  });
  describe('findAll', () => {
    it('obtener ciudades', async () => {
      const mensaje = await controller.findAll();
      console.log(mensaje);

      expect(mensaje).toEqual(expect.any(Array));
    });
  });
});
