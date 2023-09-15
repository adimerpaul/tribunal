import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasActosProcesalesController } from './categorias-actos-procesales.controller';
import { CategoriasActosProcesalesService } from './categorias-actos-procesales.service';
import { configuration } from 'src/infraestructure/database/config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaActoProcesalRepository } from './repositories/categoria-acto-procesal.repository';
import CategoriaActoProcesal from './entities/categoria-acto-procesal.entity';

describe('CategoriasActosProcesalesController', () => {
  let service: CategoriasActosProcesalesService;
  let controller: CategoriasActosProcesalesController;
  let id: number;

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
        TypeOrmModule.forFeature([CategoriaActoProcesalRepository]),
      ],
      controllers: [CategoriasActosProcesalesController],
      providers: [CategoriasActosProcesalesService, CategoriaActoProcesalRepository],
    }).compile();

    controller = module.get<CategoriasActosProcesalesController>(CategoriasActosProcesalesController);
    service = module.get<CategoriasActosProcesalesService>(CategoriasActosProcesalesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findOne', () => {
    it('verificar si no existe item', async () => {
      expect(await controller.findOne(-1)).toBe(null);
    });
    it('debe devolver un objeto de categoria-acto-procesal', async () => {
      let res: Promise<CategoriaActoProcesal>;
      jest.spyOn(service, 'findOne').mockImplementation(() => res);
      expect(await controller.findOne(id)).toBe(res);
    });
  });

  describe('findAll', () => {
    it('retorna un array de objetos de categoria-acto-procesal.', async () => {
      let res: Promise<CategoriaActoProcesal[]>;
      jest.spyOn(service, 'findAll').mockImplementation(() => res);
      expect(await controller.findAll()).toBe(res);
    });
  });
});
