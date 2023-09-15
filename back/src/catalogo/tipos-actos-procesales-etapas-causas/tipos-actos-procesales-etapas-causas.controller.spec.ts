import { Test, TestingModule } from '@nestjs/testing';
import { TiposActosProcesalesEtapasCausasController } from './tipos-actos-procesales-etapas-causas.controller';
import { TiposActosProcesalesEtapasCausasService } from './tipos-actos-procesales-etapas-causas.service';
import { CreateTiposActosProcesalesEtapasCausasDto } from './dtos/create-tipos-actos-procesales-etapas-causas.dto';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoActoProcesalEtapaCausaRepository } from './repositories/tipo-acto-procesal-etapa-causa.repository';
import { BadRequestException } from '@nestjs/common';
import { MessageEnum } from 'src/common/constants/message.enum';

describe('TiposActosProcesalesEtapasCausasController', () => {
  let module: TestingModule;
  let controller: TiposActosProcesalesEtapasCausasController;
  let id:number;

  const createTiposActosProcesalesEtapasCausasDto: CreateTiposActosProcesalesEtapasCausasDto={
    idTipoActoProcesal:expect.any(Number),
    idTipoEtapa:expect.any(Number),
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
        TypeOrmModule.forFeature([TipoActoProcesalEtapaCausaRepository]),
      ],
      controllers: [TiposActosProcesalesEtapasCausasController],
      providers: [TiposActosProcesalesEtapasCausasService, TipoActoProcesalEtapaCausaRepository],
      exports: [TipoActoProcesalEtapaCausaRepository],
    }).compile();

    controller = module.get<TiposActosProcesalesEtapasCausasController>(TiposActosProcesalesEtapasCausasController);
  });

  afterAll(async () => {
    await module.close();
  });


  it('debe ser definido', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('debe obtener toda la lista de tipos actos procesales - etapas causas', async () => {
      expect(await controller.findAll()).toEqual(expect.any(Array));
    });
  });

  id = 1;
  describe('findOne', () => {
    it('debe retornar un tipos acto procesal - etapa causa a partir de un id', async () => {
      expect(controller.findOne(id)).resolves.toEqual({ id, ...createTiposActosProcesalesEtapasCausasDto });
    });

    it('debe generar un error al buscar un registro a partir de un id ', async () => {
      expect(controller.findOne(-1)).rejects.toEqual(new BadRequestException(MessageEnum.NOT_EXIST));
    });
  });
});

