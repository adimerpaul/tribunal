import { faker } from "@faker-js/faker";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CreatePermisoDto } from "src/autorizacion/permisos/dto/create-permiso.dto";
import { PermisoEntity } from "src/autorizacion/permisos/entities/permiso.entity";
import { PermisosController } from "src/autorizacion/permisos/permisos.controller";
import { PermisosService } from "src/autorizacion/permisos/permisos.service";
import { PermisoRepository } from "src/autorizacion/permisos/repositories/permiso.repository";
import { configuration } from "src/infraestructure/database/config";

describe('PermisosController', () => {
  let controller: PermisosController;
  let id;
  const createPermisoDto: CreatePermisoDto = {
    tipo: faker.word.sample(),
    path: faker.word.sample(),
    accion: faker.word.sample(),
  };
  let module: TestingModule;
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
        TypeOrmModule.forFeature([PermisoRepository]),
      ],
      controllers: [PermisosController],
      providers: [PermisosService, PermisoRepository],
      exports: [PermisoRepository],
    }).compile();

    controller = module.get<PermisosController>(PermisosController);
  });

  afterAll(async () => {
    await module.close();
  });

  it('debe estar definido', () => {
    expect(controller).toBeDefined();
  });

  describe('crear permiso', () => {
    it('debe insertar con éxito un nuevo permiso', async () => {
      const permiso = await controller.create(createPermisoDto);
      id = permiso.id;
      expect(permiso).toEqual(expect.any(PermisoEntity));
    });
  });
  describe('obtener permiso', () => {
    const paginationDto = {
      page: 1,
      per_page: 10,
      search: [{ fields: ['permisos.tipo'], keyword: '' }],
      sort: [{ field: 'permisos.id', orderType: 'DESC' }],
    };
    it('debe obtener una lista de permisos', async () => {
      const permisos = await controller.findAll(paginationDto);
      expect(permisos).toEqual(expect.any(Object));
    });
  });
  describe('findOne', () => {
    it('debe obtener una permisos a partir del id', async () => {
      const permiso = await controller.findOne(id);
      expect(permiso).toEqual({ id, ...createPermisoDto });
    });
  });
  describe('DeleteOne', () => {
    it('debe eliminar un permiso a partir del id', async () => {
      const res = await controller.remove(id);
      expect(res).toEqual(id);
    });
  });
});