import { Test, TestingModule } from '@nestjs/testing';
import { RecintosPenitenciariosService } from './recintos-penitenciarios.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'src/infraestructure/database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecintoPenitenciarioRepository } from './repositories/recintos.repository';

describe('RecintosPenitenciariosService', () => {
  let service: RecintosPenitenciariosService;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
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
      providers: [RecintosPenitenciariosService, RecintoPenitenciarioRepository],
      exports: [RecintoPenitenciarioRepository],
    }).compile();

    service = module.get<RecintosPenitenciariosService>(RecintosPenitenciariosService);
  });
  afterAll(async () => {
    await module.close();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });
});
