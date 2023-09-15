import { Test, TestingModule } from '@nestjs/testing';
import { SalasAudienciasOficinasController } from './salas-audiencias-oficinas.controller';
import { SalasAudienciasOficinasService } from './salas-audiencias-oficinas.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalaAudienciaOficinaRepository } from './repositories/salas-audiencias-oficinas.repository';
import { GlobalService } from 'src/autorizacion/auth/global.service';
import { CreateSalasAudienciasOficinaDto } from './dto/create-salas-audiencias-oficina.dto';
import { BadRequestException } from '@nestjs/common';
import { MessageEnum } from 'src/common/constants/message.enum';

describe('SalasAudienciasOficinasController', () => {
  let module: TestingModule;
  let controller: SalasAudienciasOficinasController;
  let id: number;
  GlobalService.userNameSession = 'test';

  const createSalasAudienciasOficinaDto: CreateSalasAudienciasOficinaDto = {
    idOficina: expect.any(Number),
    idSalaAudiencia: expect.any(Number),
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
        TypeOrmModule.forFeature([SalaAudienciaOficinaRepository]),
      ],
      controllers: [SalasAudienciasOficinasController],
      providers: [SalasAudienciasOficinasService, SalaAudienciaOficinaRepository],
      exports: [SalaAudienciaOficinaRepository],
    }).compile();

    controller = module.get<SalasAudienciasOficinasController>(SalasAudienciasOficinasController);
  });

  afterAll(async () => {
    await module.close();
  });

  it('debe ser definido', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('debe obtener toda la lista de salas audiencias - oficinas', async () => {
      const salasAudienciasOficinas = await controller.findAll();
      expect(salasAudienciasOficinas).toEqual(expect.any(Array));
    });
  });

  id = 1;
  describe('findOne', () => {
    it('debe retornar una sala audiencia - oficina a partir de un id', async () => {
      expect(controller.findOne(id)).resolves.toEqual({ id, ...createSalasAudienciasOficinaDto });
    });

    it('debe generar un error al buscar un registro a partir de un id ', async () => {
      expect(controller.findOne(-1)).rejects.toEqual(new BadRequestException(MessageEnum.NOT_EXIST));
    });
  });
});
