import { Test, TestingModule } from '@nestjs/testing';
import { SegipService } from './segip.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonasModule } from 'src/identidad/personas/personas.module';
import { PaisesModule } from 'src/geografico/paises/paises.module';
import { DepartamentosModule } from 'src/geografico/departamentos/departamentos.module';
import { MunicipiosModule } from 'src/geografico/municipios/municipios.module';
import { TiposEstadosCivilesModule } from 'src/catalogo/tipos-estados-civiles/tipos-estados-civiles.module';

describe('SegipService', () => {
  let service: SegipService;

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
      providers: [SegipService],
    }).compile();

    service = module.get<SegipService>(SegipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
