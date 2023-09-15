import { Test, TestingModule } from '@nestjs/testing';
import { IdiomasController } from './idiomas.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdiomasService } from './idiomas.service';
import { IdiomaRepository } from './repositories/idioma.repository';

describe('IdiomasController', () => {
  let controller: IdiomasController;

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
        TypeOrmModule.forFeature([IdiomaRepository]),
      ],
      controllers: [IdiomasController],
      providers: [IdiomasService, IdiomaRepository],
    }).compile();

    controller = module.get<IdiomasController>(IdiomasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
