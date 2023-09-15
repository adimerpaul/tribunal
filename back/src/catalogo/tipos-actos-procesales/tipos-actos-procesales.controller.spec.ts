import { Test, TestingModule } from '@nestjs/testing';
import { GlobalService } from 'src/autorizacion/auth/global.service';
import { TiposActosProcesalesController } from './tipos-actos-procesales.controller';
import { TiposActosProcesalesService } from './tipos-actos-procesales.service';
import { CreateTipoActoProcesalDto } from './dto/create-tipo-acto-procesal.dto';
import { faker } from '@faker-js/faker';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoActoProcesalRepository } from './repositories/tipo-acto-procesal.repository';
import { BadRequestException } from '@nestjs/common';
import { MessageEnum } from 'src/common/constants/message.enum';
import { insertCamposAuditoria } from 'src/common/test/constants/auditoria.constant';

describe('TiposActosProcesalesController', () => {
  let controller: TiposActosProcesalesController;
  let module: TestingModule;
  let id: number;
  GlobalService.userNameSession = 'test';

  const createTipoActoProcesalDto: CreateTipoActoProcesalDto = {
    idCategoria: faker.number.int({ min: 1, max: 10 }),
    codigo: faker.number.int({ min: 1, max: 10 }),
    descripcion: faker.word.sample(),
    plazoResolucion: faker.number.int({ min: 1, max: 10 }),
    plazoResolucionUnidad: faker.number.int({ min: 1, max: 10 }),
    plazoContinuo: faker.datatype.boolean(),
    plazoComun: faker.datatype.boolean(),
    plazoSuspencion: faker.number.int({ min: 1, max: 10 }),
    visibilidad: faker.number.int({ min: 1, max: 10 }),
    unicoCausa: faker.datatype.boolean(),
    unicoSujetoProcesal: faker.datatype.boolean(),
    requiereRespuesta: faker.datatype.boolean(),
    requiereAgendamiento: faker.datatype.boolean(),
    requiereNotificacion: faker.datatype.boolean(),
    requiereNotificacionPersonal: faker.datatype.boolean(),
    requiereIndividualizacionSujetos: faker.datatype.boolean(),
    requiereIndividualizacionDenunciantes: faker.datatype.boolean(),
    requiereIndividualizacionDenunciados: faker.datatype.boolean(),
    requiereAdjuntos: faker.datatype.boolean(),
    conAdjuntos: faker.datatype.boolean(),
    conPlantilla: faker.datatype.boolean(),
    cantidadValidaciones: faker.number.int({ min: 1, max: 10 }),
    interoperable: faker.datatype.boolean(),
    cambiaEstado: faker.datatype.boolean(),
    cambiaEtapa: faker.datatype.boolean(),
    ambito: faker.word.sample(),
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
          useFactory: (config: ConfigService) => ({ ...config.get('db') }),
          inject: [ConfigService],
        }),
        TypeOrmModule.forFeature([TipoActoProcesalRepository]),
      ],
      controllers: [TiposActosProcesalesController],
      providers: [TiposActosProcesalesService, TipoActoProcesalRepository],
      exports: [TipoActoProcesalRepository],
    }).compile();

    controller = module.get<TiposActosProcesalesController>(TiposActosProcesalesController);
  });

  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('debe registrar con exito un nuevo registro', async () => {
      const tipoActoProcesal = await controller.create(createTipoActoProcesalDto);
      id = tipoActoProcesal.id;
      expect(tipoActoProcesal).toEqual({
        id,
        ...createTipoActoProcesalDto,
        ...insertCamposAuditoria(GlobalService.userNameSession),
      });
    });

    it('debe generar un error al crear un registro duplicado', async () => {
      expect(controller.create(createTipoActoProcesalDto)).rejects.toEqual(new BadRequestException(MessageEnum.EXIST));
    });
  });

  describe('findall', () => {
    it('debe obtener una lista.', async () => {
      expect(controller.findAll()).resolves.toEqual([{ id, ...createTipoActoProcesalDto }]);
    });
  });

  describe('findOne', () => {
    it('debe obtener un registro a partir del id', async () => {
      expect(controller.findOne(id)).resolves.toEqual({ id, ...createTipoActoProcesalDto });
    });
    it('debe generar un error al buscar un registro a partir del id', async () => {
      expect(controller.findOne(1)).rejects.toEqual(new BadRequestException(MessageEnum.NOT_EXIST));
    });
  });
  describe('remove', () => {
    it('debe eliminar de forma lógica un registro a partir del id', async () => {
      expect(controller.remove(id)).resolves.toEqual(id);
    });
  });
});
