import { Test, TestingModule } from '@nestjs/testing';
import { RecintosPenitenciariosController } from './recintos-penitenciarios.controller';
import { RecintosPenitenciariosService } from './recintos-penitenciarios.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecintoPenitenciarioRepository } from './repositories/recintos.repository';

describe('RecintosPenitenciariosController', () => {
  let controller: RecintosPenitenciariosController;

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
        TypeOrmModule.forFeature([RecintoPenitenciarioRepository]),
      ],
      controllers: [RecintosPenitenciariosController],
      providers: [RecintosPenitenciariosService, RecintoPenitenciarioRepository],
    }).compile();

    controller = module.get<RecintosPenitenciariosController>(RecintosPenitenciariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('findAll', () => {
    it('obtener recintos penitenciarios', async () => {
      const mensaje = await controller.findAll();
      console.log(mensaje);

      expect(mensaje).toEqual(expect.any(Array));
    });
  });
});
