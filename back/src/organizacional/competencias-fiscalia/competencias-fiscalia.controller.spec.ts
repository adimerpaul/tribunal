import { Test, TestingModule } from '@nestjs/testing';
import { CompetenciasFiscaliaController } from './competencias-fiscalia.controller';
import { CompetenciasFiscaliaService } from './competencias-fiscalia.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetenciaFiscaliaRepository } from './repositories/competencia-fiscalia.repository';

describe('CompetenciasFiscaliaController', () => {
  let controller: CompetenciasFiscaliaController;

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
        TypeOrmModule.forFeature([CompetenciaFiscaliaRepository]),
      ],
      controllers: [CompetenciasFiscaliaController],
      providers: [CompetenciasFiscaliaService, CompetenciaFiscaliaRepository],
    }).compile();

    controller = module.get<CompetenciasFiscaliaController>(CompetenciasFiscaliaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('findAll', () => {
    it('obtener Competencias Fiscales', async () => {
      const mensaje = await controller.findAll();
      console.log(mensaje);

      expect(mensaje).toEqual(expect.any(Array));
    });
  });
});
