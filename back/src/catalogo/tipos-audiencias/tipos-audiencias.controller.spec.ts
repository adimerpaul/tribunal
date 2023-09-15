import { Test, TestingModule } from '@nestjs/testing';
import { TiposAudienciasController } from './tipos-audiencias.controller';
import { TiposAudienciasService } from './tipos-audiencias.service';
import { TipoAudienciaRepository } from './repositories/tipo-audiencia.repository';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from 'src/infraestructure/database/config';
import { insertCamposAuditoria, updateCamposAuditoria } from 'src/common/test/constants/auditoria.constant';
import { faker } from '@faker-js/faker/locale/af_ZA';
import { CreateTipoAudienciaDto } from './dtos/create-tipos-audiencias.dto';
import { BadRequestException } from '@nestjs/common';
import { MessageEnum } from 'src/common/constants/message.enum';
import { GlobalService } from 'src/autorizacion/auth/global.service';
import { UpdateTipoAudienciaDto } from './dtos/update-tipos-audiencia.dto';

describe('TiposAudienciasController', () => {
  let module: TestingModule;
  let controller: TiposAudienciasController;
  let id:number; 
  GlobalService.userNameSession = 'test';
  
  const createTipoAudienciaDto: CreateTipoAudienciaDto = {
    codigo: faker.number.int({ min: 1, max: 1000 }),
    descripcion: faker.commerce.productDescription(),
    plazoMinimo: faker.number.int({ min: 1, max: 1000 }),
    plazoIntermedio: faker.number.int({ min: 1, max: 1000 }),
    plazoMaximo: faker.number.int({ min: 1, max: 1000 }),
    duracionMinima: faker.number.int({ min: 1, max: 1000 }),
    duracionMedia: faker.number.int({ min: 1, max: 1000 }),
    duracionMaxima: faker.number.int({ min: 1, max: 1000 }),
    sujetos: faker.number.int({ min: 1, max: 100 }),
    incremento: faker.number.int({ min: 1, max: 1000 }),
    leyNormativa: faker.word.sample(),
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
        TypeOrmModule.forFeature([TipoAudienciaRepository]),
      ],
      controllers: [TiposAudienciasController],
      providers: [TiposAudienciasService, TipoAudienciaRepository],
      exports: [TipoAudienciaRepository],
    }).compile();

    controller = module.get<TiposAudienciasController>(TiposAudienciasController);
  });

  afterAll(async () => {
    await module.close();
  });

  it('debe ser definido', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('debe insertar con éxito un nuevo registro', async () => {
      const tipoAudiencia = await controller.create(createTipoAudienciaDto);
      id = tipoAudiencia.id;
      expect(tipoAudiencia).toEqual({
        id,
        ...createTipoAudienciaDto,
        ...insertCamposAuditoria(GlobalService.userNameSession),
      });
    });

    it('debe generar un error al crear un registro duplicado', async () => {
      expect(controller.create(createTipoAudienciaDto)).rejects.toEqual(new BadRequestException(MessageEnum.EXIST));
    });
  });

  describe('Obtener Tipos Audiencias', () => {
    it('debe obtener una lista de tipos audiencias', async () => {
      const tiposAudiencias = await controller.findAll();
      expect(tiposAudiencias).toEqual(expect.any(Array));
    });
  });

  describe('findOne',()=>{
    it('debe obtener tipo audiencia a partir de un id', async () => {
      expect(controller.findOne(id)).resolves.toEqual({ id, ...createTipoAudienciaDto });
    });

    it('debe generar un error al buscar un registro a partir del id', async () => {
      expect(controller.findOne(-1)).rejects.toEqual(new BadRequestException(MessageEnum.NOT_EXIST));
    });
  });

  describe('update', () => {
    it('debe actualizar un registro a partir del id', async () => {
      const tipoAudienciaDto: UpdateTipoAudienciaDto = { ...createTipoAudienciaDto, descripcion: faker.commerce.productName() };
      expect(controller.update(id, tipoAudienciaDto)).resolves.toEqual({
        id,
        ...tipoAudienciaDto,
        ...updateCamposAuditoria(GlobalService.userNameSession),
      });
    });
  });

  describe('remove', () => {
    it('debe eliminar de forma lógica un registro a partir del id', async () => {
      expect(controller.remove(id)).resolves.toEqual(id);
    });
  });
});
