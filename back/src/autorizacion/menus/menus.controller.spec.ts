import { faker } from '@faker-js/faker';
import { BadRequestException } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEnum } from 'src/common/constants/message.enum';
import { insertCamposAuditoria, updateCamposAuditoria } from 'src/common/test/constants/auditoria.constant';
import { configuration } from 'src/infraestructure/database/config';
import { GlobalService } from '../auth/global.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { MenusController } from './menus.controller';
import { MenusService } from './menus.service';
import { MenuRepository } from './repositories/menu.repository';
import { Pagination } from 'src/common/entities/pagination-result';

describe('MenusController', () => {
  let module: TestingModule;
  let controller: MenusController;
  let id: number;
  GlobalService.userNameSession = 'test';

  const createMenuDto: CreateMenuDto = {
    nombre: faker.commerce.productName() + Date.now(),
    descripcion: faker.word.sample(),
    icono: faker.word.sample(),
    url: '/' + faker.word.sample(),
    ordenDespliegue: faker.number.int({ min: 1, max: 100 }),
    idPadre: 0,
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
        TypeOrmModule.forFeature([MenuRepository]),
      ],
      controllers: [MenusController],
      providers: [MenusService, MenuRepository],
      exports: [MenuRepository],
    }).compile();

    controller = module.get<MenusController>(MenusController);
  });

  afterAll(async () => {
    await module.close();
  });

  it('debe estar definido', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('debe insertar con éxito un nuevo registro', async () => {
      const menu = await controller.create(createMenuDto);
      id = menu.id;
      expect(menu).toEqual({
        id,
        ...createMenuDto,
        ...insertCamposAuditoria(GlobalService.userNameSession),
      });
    });

    it('debe generar un error al crear un registro duplicado', async () => {
      expect(controller.create(createMenuDto)).rejects.toEqual(new BadRequestException(MessageEnum.EXIST));
    });
  });

  describe('findAll', () => {
    const paginationDto = {
      page: 1,
      per_page: 10,
      search: [{ fields: ['nombre'], keyword: createMenuDto.nombre }],
      sort: [{ field: 'id', orderType: 'DESC' }],
    };
    it('debe obtener una lista con paginación', async () => {
      const menus = await controller.findAll(paginationDto);
      expect(menus.response).toEqual({
        pagination: expect.any(Pagination),
        result: [{ id, ...createMenuDto }],
      });
    });
  });

  describe('findOne', () => {
    it('debe obtener un registro a partir del id', async () => {
      expect(controller.findOne(id)).resolves.toEqual({ id, ...createMenuDto });
    });

    it('debe generar un error al buscar un registro a partir del id', async () => {
      expect(controller.findOne(-1)).rejects.toEqual(new BadRequestException(MessageEnum.NOT_EXIST));
    });
  });

  describe('update', () => {
    it('debe actualizar un registro a partir del id', async () => {
      const menuDto: UpdateMenuDto = { ...createMenuDto, nombre: faker.commerce.productName() + Date.now() };
      expect(controller.update(id, menuDto)).resolves.toEqual({
        id,
        ...menuDto,
        ...updateCamposAuditoria(GlobalService.userNameSession),
      });
    });
  });

  describe('remove', () => {
    it('debe eliminar de forma lógica un registro a partir del id', async () => {
      expect(controller.remove(id)).resolves.toEqual(id);
    });
  });
  
  describe('findByIdRol', () => {
    it('debe retornar un listado de menus segun al id rol', async () => {
      const idRol = '2'; //Rol Administrador
      expect(controller.findByIdRol(idRol)).resolves.toEqual(expect.any(Array));
    });
  });

});
