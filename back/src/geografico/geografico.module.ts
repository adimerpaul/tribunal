import { Module } from '@nestjs/common';
import { CiudadesModule } from './ciudades/ciudades.module';
import { DepartamentosModule } from './departamentos/departamentos.module';
import { MunicipiosModule } from './municipios/municipios.module';
import { PaisesModule } from './paises/paises.module';
import { ProvinciasModule } from './provincias/provincias.module';

@Module({
  imports: [CiudadesModule, DepartamentosModule, MunicipiosModule, PaisesModule, ProvinciasModule],
})
export class GeograficoModule {}
