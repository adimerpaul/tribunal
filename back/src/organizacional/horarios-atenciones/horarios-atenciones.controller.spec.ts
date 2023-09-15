import { Test, TestingModule } from '@nestjs/testing';
import { HorariosAtencionesController } from './horarios-atenciones.controller';
import { HorariosAtencionesService } from './horarios-atenciones.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorarioAtencionRepository } from './repositories/horario-atencion.repository';

describe('HorariosAtencionesController', () => {
  let controller: HorariosAtencionesController;

  beforeEach(async () => {
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
        TypeOrmModule.forFeature([HorarioAtencionRepository]),
      ],
      controllers: [HorariosAtencionesController],
      providers: [HorariosAtencionesService, HorarioAtencionRepository],
    }).compile();

    controller = module.get<HorariosAtencionesController>(HorariosAtencionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('findAll', () => {
    it('obtener horarios atencion', async () => {
      const mensaje = await controller.findAll();
      console.log(mensaje);

      expect(mensaje).toEqual(expect.any(Array));
    });
  });
});
