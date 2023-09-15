import { Test, TestingModule } from '@nestjs/testing';
import { SalasAudienciasController } from './salas-audiencias.controller';
import { SalasAudienciasService } from './salas-audiencias.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalaAudienciaRepository } from './repositories/salas-audiencias.repository';
import { CreateSalasAudienciaDto } from './dto/create-salas-audiencia.dto';
import { GlobalService } from 'src/autorizacion/auth/global.service';
import { BadRequestException } from '@nestjs/common';
import { MessageEnum } from 'src/common/constants/message.enum';

describe('SalasAudienciasController', () => {
  let module: TestingModule;
  let controller: SalasAudienciasController;
  let id: number;
  GlobalService.userNameSession = 'test';

  const createSalaAudienciaDto: CreateSalasAudienciaDto = {
    descripcion: expect.any(String),
    ubicacion: expect.any(String),
    capacidad: expect.any(String),
    dimension: expect.any(String),
    esCamaraGesell: expect.any(Boolean),
  };

  beforeAll(async () => {
    module = await Test.createTestingModule({
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
        TypeOrmModule.forFeature([SalaAudienciaRepository]),
      ],
      controllers: [SalasAudienciasController],
      providers: [SalasAudienciasService, SalaAudienciaRepository],
      exports: [SalaAudienciaRepository],
    }).compile();

    controller = module.get<SalasAudienciasController>(SalasAudienciasController);
  });

  afterAll(async () => {
    await module.close();
  });

  it('debe ser definido', () => {
    expect(controller).toBeDefined();
  });

  describe('Obtener Salas', () => {
    it('debe obtener una lista de salas audiencias', async () => {
      expect(await controller.findAll()).toEqual(expect.any(Array));
    });
  });

  id = 8;
  describe('findOne', () => {
    it('debe obtener una sala a partir de un id', async () => {
      expect(controller.findOne(id)).resolves.toEqual({ id, ...createSalaAudienciaDto });
    });

    it('debe generar un error al buscar un registro a partir del id', async () => {
      expect(controller.findOne(-1)).rejects.toEqual(new BadRequestException(MessageEnum.NOT_EXIST));
    });

  });
});
