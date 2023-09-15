import { Test, TestingModule } from '@nestjs/testing';
import { PaisesController } from './paises.controller';
import { PaisesService } from './paises.service';
import { PaisRepository } from './repositories/pais.repository';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from 'src/infraestructure/database/config';

describe('PaisesController', () => {
  let controller: PaisesController;

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
        TypeOrmModule.forFeature([PaisRepository]),
      ],
      controllers: [PaisesController],
      providers: [PaisesService, PaisRepository],
    }).compile();

    controller = module.get<PaisesController>(PaisesController);
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
