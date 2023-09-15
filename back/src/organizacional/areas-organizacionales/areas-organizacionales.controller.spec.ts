import { Test, TestingModule } from '@nestjs/testing';
import { AreasOrganizacionalesController } from './areas-organizacionales.controller';
import { AreasOrganizacionalesService } from './areas-organizacionales.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaOrganizacionalRepository } from './repositories/area-organizacional.repository';
import { BadRequestException } from '@nestjs/common';
import { MessageEnum } from 'src/common/constants/message.enum';

describe.skip('AreasOrganizacionalesController', () => {
  let controller: AreasOrganizacionalesController;
  let module: TestingModule;
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
        TypeOrmModule.forFeature([AreaOrganizacionalRepository]),
      ],
      controllers: [AreasOrganizacionalesController],
      providers: [AreasOrganizacionalesService, AreaOrganizacionalRepository],
      exports: [AreaOrganizacionalRepository],
    }).compile();

    controller = module.get<AreasOrganizacionalesController>(AreasOrganizacionalesController);
  });

  afterAll(async () => {
    await module.close();
  });

  it('debe estar definido', () => {
    expect(controller).toBeDefined();
  });

  describe('findOne', () => {
    it('debe obtener un registro a partir del id', async () => {
      expect(controller.findOne(id)).resolves.toEqual(id);
    });

    it('debe generar un error al buscar un registro a partir del id', async () => {
      expect(controller.findOne(-1)).rejects.toEqual(new BadRequestException(MessageEnum.NOT_EXIST));
    });
  });
});
