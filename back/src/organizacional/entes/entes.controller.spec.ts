import { Test, TestingModule } from '@nestjs/testing';
import { EntesController } from './entes.controller';
import { EntesService } from './entes.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnteRepository } from './repositories/ente.repository';

describe.skip('EntesController', () => {
  let controller: EntesController;
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
        TypeOrmModule.forFeature([EnteRepository]),
      ],
      controllers: [EntesController],
      providers: [EntesService, EnteRepository],
    }).compile();

    controller = module.get<EntesController>(EntesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe.skip('findAll', () => {
    it('obtener entes', async () => {
      const mensaje = await controller.findAll();
      expect(mensaje).toEqual(expect.any(Array));
    });
  });
});
