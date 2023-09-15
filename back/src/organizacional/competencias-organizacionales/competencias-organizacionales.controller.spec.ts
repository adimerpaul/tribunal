import { Test, TestingModule } from '@nestjs/testing';
import { CompetenciasOrganizacionalesController } from './competencias-organizacionales.controller';
import { CompetenciasOrganizacionalesService } from './competencias-organizacionales.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetenciaOrganizacionalRepository } from './repositories/competencia-organizacional.repository';

describe('CompetenciasOrganizacionalesController', () => {
  let controller: CompetenciasOrganizacionalesController;

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
        TypeOrmModule.forFeature([CompetenciaOrganizacionalRepository]),
      ],
      controllers: [CompetenciasOrganizacionalesController],
      providers: [CompetenciasOrganizacionalesService, CompetenciaOrganizacionalRepository],
    }).compile();

    controller = module.get<CompetenciasOrganizacionalesController>(CompetenciasOrganizacionalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('findAll', () => {
    it('obtener competencias organizacionales', async () => {
      const mensaje = await controller.findAll();
      console.log(mensaje);

      expect(mensaje).toEqual(expect.any(Array));
    });
  });
});
