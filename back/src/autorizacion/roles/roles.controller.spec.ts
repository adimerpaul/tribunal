import { faker } from "@faker-js/faker";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MenusModule } from "src/autorizacion/menus/menus.module";
import { PermisoEntity } from "src/autorizacion/permisos/entities/permiso.entity";
import { PermisosModule } from "src/autorizacion/permisos/permisos.module";
import { CreateRoleDto } from "src/autorizacion/roles/dto/create-role.dto";
import { RolEntity } from "src/autorizacion/roles/entities/rol.entity";
import { RolRepository } from "src/autorizacion/roles/repositories/rol.repository";
import { RolesController } from "src/autorizacion/roles/roles.controller";
import { RolesService } from "src/autorizacion/roles/roles.service";
import { configuration } from "src/infraestructure/database/config";

describe('RolesController', () => {
  let controller: RolesController;
  let id;
  const createRolDto: CreateRoleDto = {
    nombre: faker.word.sample(),
    descripcion: faker.word.sample(),
    codigo: faker.word.sample(),
    nivel: faker.number.int({ min: 1, max: 200 })
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
        TypeOrmModule.forFeature([RolRepository, PermisoEntity]), MenusModule, PermisosModule
      ],
      controllers: [RolesController],
      providers: [RolesService, RolRepository],
      exports: [RolRepository],
    }).compile();

    controller = module.get<RolesController>(RolesController);
  });

  afterAll(async () => {
    await module.close();
  });

  it('debe estar definido', () => {
    expect(controller).toBeDefined();
  });

  describe('crear rol', () => {
    it('debe insertar con éxito un nuevo rol', async () => {
      const rol = await controller.create(createRolDto);
      id = rol.id;
      expect(rol).toEqual(expect.any(RolEntity));
    });
  });
  describe('obtener roles', () => {
    const paginationDto = {
      page: 1,
      per_page: 10,
      search: [{ fields: ['roles.nombre'], keyword: '' }],
      sort: [{ field: 'roles.id', orderType: 'DESC' }],
    };
    it('debe obtener una lista de roles', async () => {
      const roles = await controller.findAll(paginationDto);
      expect(roles).toEqual(expect.any(Object));
    });
  });
  describe('findOne', () => {
    it('debe obtener una rol a partir del id', async () => {
      const res = await controller.findOne(id);
      expect(res).toEqual({ id, ...createRolDto });
    });
  });

  describe('DeleteOne', () => {
    it('debe eliminar un rol a partir del id', async () => {
      const res = await controller.remove(id);
      expect(res).toEqual(id);
    });
  });
});