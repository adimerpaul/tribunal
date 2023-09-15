import { Module } from '@nestjs/common';
import { SegipService } from './segip.service';
import { SegipController } from './segip.controller';
import { PersonasModule } from 'src/identidad/personas/personas.module';
import { PaisesModule } from 'src/geografico/paises/paises.module';
import { DepartamentosModule } from 'src/geografico/departamentos/departamentos.module';
import { MunicipiosModule } from 'src/geografico/municipios/municipios.module';
import { TiposEstadosCivilesModule } from 'src/catalogo/tipos-estados-civiles/tipos-estados-civiles.module';

@Module({
  imports: [PersonasModule, PaisesModule, DepartamentosModule, MunicipiosModule, TiposEstadosCivilesModule],
  controllers: [SegipController],
  providers: [SegipService],
})
export class SegipModule {}
