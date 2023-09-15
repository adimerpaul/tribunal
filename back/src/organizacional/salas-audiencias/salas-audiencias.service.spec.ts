import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from 'src/infraestructure/database/config';
import { SalaAudienciaRepository } from './repositories/salas-audiencias.repository';
import { SalasAudienciasController } from './salas-audiencias.controller';
import { SalasAudienciasService } from './salas-audiencias.service';

describe.skip('SalasAudienciasService', () => {
  let service: SalasAudienciasService;

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
        TypeOrmModule.forFeature([SalaAudienciaRepository]),
      ],
      controllers: [SalasAudienciasController],
      providers: [SalasAudienciasService, SalaAudienciaRepository],
    }).compile();

    service = module.get<SalasAudienciasService>(SalasAudienciasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Devolver salas audiencias', () => {
    it('obtener todas las salas audiencias', async () => {
      const mensaje = await service.findAll();
      expect(mensaje).toEqual(expect.any(Array));
    });

    it('obtener una sala audiencia', async done => {
      try {
        const msj = expect(service.findOne(1));
        console.log(msj);
      } catch (err) {
        done();
      }
    });
  });
});
