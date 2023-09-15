import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from 'src/infraestructure/database/config';
import { SubGrupoDelitosService } from './subgrupos-delitos.service';
import { SubGruposDelitosController } from './subgrupos-delitos.controller';
import { SubGrupoDelitoRepository } from './repositories/subgrupo-delito.repository';

describe('SubgruposDelitosController', () => {
  let controller: SubGruposDelitosController;

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
        TypeOrmModule.forFeature([SubGrupoDelitoRepository]),
      ],
      controllers: [SubGruposDelitosController],
      providers: [SubGrupoDelitosService, SubGrupoDelitoRepository],
    }).compile();

    controller = module.get<SubGruposDelitosController>(SubGruposDelitosController);
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

