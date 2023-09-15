import { Test, TestingModule } from '@nestjs/testing';
import { ProvinciaController } from './provincias.controller';
import { ProvinciasService } from './provincias.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinciaRepository } from './repositories/provincia.repository';

describe('ProvinciasController', () => {
  let controller: ProvinciaController;

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
        TypeOrmModule.forFeature([ProvinciaRepository]),
      ],
      controllers: [ProvinciaController],
      providers: [ProvinciasService, ProvinciaRepository],
    }).compile();

    controller = module.get<ProvinciaController>(ProvinciaController);
  });
  it('debe ser definido', () => {
    expect(controller).toBeDefined();
  });
  describe('findAll', () => {
    it('obtener provincias', async () => {
      const mensaje = await controller.findAll();
      console.log(mensaje);
      expect(mensaje).toEqual(expect.any(Array));
    });
  });
});
