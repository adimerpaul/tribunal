import { Test, TestingModule } from '@nestjs/testing';
import { TiposActosProcesalesTiposAudienciasController } from './tipos-actos-procesales-tipos-audiencias.controller';
import { TiposActosProcesalesTiposAudienciasService } from './tipos-actos-procesales-tipos-audiencias.service';
import { CreateTiposActosProcesalesTipoAudienciaDto } from './dtos/create-tipos-actos-procesales-tipos-audiencias.dto';
import { TipoActoProcesalTipoAudienciaRepository } from './repositories/tipo-acto-procesal-tipo-audiencia.repository';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BadRequestException } from '@nestjs/common';
import { MessageEnum } from 'src/common/constants/message.enum';

describe('TiposActosProcesalesTiposAudienciasController', () => {
  let module: TestingModule;
  let controller: TiposActosProcesalesTiposAudienciasController;
  let id:number;

  const createTiposActosProcesalesTiposAudienciasDto: CreateTiposActosProcesalesTipoAudienciaDto={
    idTipoActoProcesal: expect.any(Number),
    idTipoAudiencia: expect.any(Number),
  }

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
        TypeOrmModule.forFeature([TipoActoProcesalTipoAudienciaRepository]),
      ],
      controllers: [TiposActosProcesalesTiposAudienciasController],
      providers: [TiposActosProcesalesTiposAudienciasService, TipoActoProcesalTipoAudienciaRepository],
      exports: [TipoActoProcesalTipoAudienciaRepository],
    }).compile();

    controller = module.get<TiposActosProcesalesTiposAudienciasController>(TiposActosProcesalesTiposAudienciasController);
  });

  afterAll(async () => {
    await module.close();
  });

  it('Debe ser definido', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('debe obtener toda la lista de tipos actos procesales - tipos audiencias', async () => {
       expect(await controller.findAll()).toEqual(expect.any(Array));
    });
  });

  id = 1;
  describe('findOne', () => {
    it('debe retornar un tipo acto procesal - tipo audiencia a partir de un id', async () => {
      expect(controller.findOne(id)).resolves.toEqual({ id, ...createTiposActosProcesalesTiposAudienciasDto });
    });

    it('debe generar un error al buscar un registro a partir de un id ', async () => {
      expect(controller.findOne(-1)).rejects.toEqual(new BadRequestException(MessageEnum.NOT_EXIST));
    });
  });
});
