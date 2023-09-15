import { Test, TestingModule } from '@nestjs/testing';
import { CompetenciasGestorasController } from './competencias-gestoras.controller';
import { CompetenciasGestorasService } from './competencias-gestoras.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetenciaGestoraRepository } from './repositories/competencia-gestora.repository';

describe('CompetenciasGestorasController', () => {
  let controller: CompetenciasGestorasController;

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
        TypeOrmModule.forFeature([CompetenciaGestoraRepository]),
      ],
      controllers: [CompetenciasGestorasController],
      providers: [CompetenciasGestorasService, CompetenciaGestoraRepository],
    }).compile();

    controller = module.get<CompetenciasGestorasController>(CompetenciasGestorasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('findAll', () => {
    it('obtener Competencia Gestoras', async () => {
      const mensaje = await controller.findAll();
      console.log(mensaje);

      expect(mensaje).toEqual(expect.any(Array));
    });
  });
});
