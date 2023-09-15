import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from 'src/infraestructure/database/config';
import { GruposDelitosController } from './grupos-delitos.controller';
import { GruposDelitosService } from './grupos-delitos.service';
import { GrupoDelitoRepository } from './repositories/grupo-delito.repository';


describe('GruposDelitosController', () => {
  let controller: GruposDelitosController;

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
        TypeOrmModule.forFeature([GrupoDelitoRepository]),
      ],
      controllers: [GruposDelitosController],
      providers: [GruposDelitosService, GrupoDelitoRepository],
    }).compile();

    controller = module.get<GruposDelitosController>(GruposDelitosController);
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
