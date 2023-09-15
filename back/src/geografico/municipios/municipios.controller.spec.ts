import { Test, TestingModule } from '@nestjs/testing';
import { MunicipiosController } from './municipios.controller';
import { MunicipiosService } from './municipios.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MunicipioRepository } from './repositories/municipio.repository';

describe('MunicipiosController', () => {
  let controller: MunicipiosController;

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
        TypeOrmModule.forFeature([MunicipioRepository]),
      ],
      controllers: [MunicipiosController],
      providers: [MunicipiosService, MunicipioRepository],
    }).compile();
    controller = module.get<MunicipiosController>(MunicipiosController);
  });
  it('debe ser definido', () => {
    expect(controller).toBeDefined();
  });
  describe('findAll', () => {
    it('obtener municipios', async () => {
      const mensaje = await controller.findAll();
      console.log(mensaje);
      expect(mensaje).toEqual(expect.any(Array));
    });
  });
});
