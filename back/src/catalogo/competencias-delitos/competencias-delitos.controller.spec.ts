import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from 'src/infraestructure/database/config';
import { CompetenciasDelitosController } from './competencias-delitos.controller';
import { CompetenciasDelitosService } from './competencias-delitos.service';
import { CompetenciasDelitosRepository } from './repositories/competencia-delito.repository';

describe('CompetenciasDelitosController', () => {
  let controller: CompetenciasDelitosController;

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
        TypeOrmModule.forFeature([CompetenciasDelitosRepository]),
      ],
      controllers: [CompetenciasDelitosController],
      providers: [CompetenciasDelitosService, CompetenciasDelitosRepository],
    }).compile();

    controller = module.get<CompetenciasDelitosController>(CompetenciasDelitosController);
  });

  it('debe estar definido', () => {
    expect(controller).toBeDefined();
  });
  describe('findAll', () => {
    it('obtener paises', async () => {
      const mensaje = await controller.findAll();
      console.log(mensaje);

      expect(mensaje).toEqual(expect.any(Array));
    });
  });
});
