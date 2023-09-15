import { Test, TestingModule } from '@nestjs/testing';
import { TiposEtapasCausasController } from './tipos-etapas-causas.controller';
import { TiposEtapasCausasService } from './tipos-etapas-causas.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoEtapaCausaRepository } from './repositories/tipo-etapa-causa.repository';
import { CreateTiposEtapasCausasDto } from './dtos/create-tipos-etapas-causas.dto';
import { BadRequestException } from '@nestjs/common';
import { MessageEnum } from 'src/common/constants/message.enum';

describe('TiposEtapasCausasController', () => {
  let module: TestingModule;
  let controller: TiposEtapasCausasController;
  let id: number;

  const createTiposEtapasCausasDto: CreateTiposEtapasCausasDto = {
    codigo: 12,
    descripcion: "Alguna",
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
        TypeOrmModule.forFeature([TipoEtapaCausaRepository]),
      ],
      controllers: [TiposEtapasCausasController],
      providers: [TiposEtapasCausasService, TipoEtapaCausaRepository],
      exports: [TipoEtapaCausaRepository],
    }).compile();

    controller = module.get<TiposEtapasCausasController>(TiposEtapasCausasController);
  });

  afterAll(async () => {
    await module.close();
  });


  it('debe estar definido.', () => {
    expect(controller).toBeDefined();
  });

  describe('Obtener tipos etapas causas', () => {
    it('debe obtener una lista de etapas causas', async () => {
      expect(await controller.findAll()).toEqual(expect.any(Array));
    });
  });

  id = 1;
  describe('findOne', () => {
    it('debe obtener una etapa causa a partir de un id', async () => {
      expect(controller.findOne(id)).resolves.toEqual({ id, ...createTiposEtapasCausasDto });
    });

    it('debe generar un error al buscar un registro a partir del id', async () => {
      expect(controller.findOne(-1)).rejects.toEqual(new BadRequestException(MessageEnum.NOT_EXIST));
    });

  });
});

