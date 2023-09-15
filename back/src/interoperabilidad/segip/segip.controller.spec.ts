import { Test, TestingModule } from '@nestjs/testing';
import { SegipController } from './segip.controller';
import { SegipService } from './segip.service';
import { PersonasModule } from 'src/identidad/personas/personas.module';
import { PaisesModule } from 'src/geografico/paises/paises.module';
import { DepartamentosModule } from 'src/geografico/departamentos/departamentos.module';
import { MunicipiosModule } from 'src/geografico/municipios/municipios.module';
import { TiposEstadosCivilesModule } from 'src/catalogo/tipos-estados-civiles/tipos-estados-civiles.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('SegipController', () => {
  let controller: SegipController;

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
        PersonasModule,
        PaisesModule,
        DepartamentosModule,
        MunicipiosModule,
        TiposEstadosCivilesModule,
      ],
      controllers: [SegipController],
      providers: [SegipService],
    }).compile();

    controller = module.get<SegipController>(SegipController);
  });

  it('debe estar definido', () => {
    expect(controller).toBeDefined();
  });
});
