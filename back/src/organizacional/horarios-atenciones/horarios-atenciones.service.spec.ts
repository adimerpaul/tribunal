import { Test, TestingModule } from '@nestjs/testing';
import { HorariosAtencionesService } from './horarios-atenciones.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorarioAtencionRepository } from './repositories/horario-atencion.repository';

describe('HorariosAtencionesService', () => {
  let service: HorariosAtencionesService;
  let module: TestingModule;

  beforeEach(async () => {
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
        TypeOrmModule.forFeature([HorarioAtencionRepository]),
      ],
      providers: [HorariosAtencionesService, HorarioAtencionRepository],
      exports: [HorarioAtencionRepository],
    }).compile();

    service = module.get<HorariosAtencionesService>(HorariosAtencionesService);
  });
  afterAll(async () => {
    await module.close();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });
});
