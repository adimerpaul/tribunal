import { Module } from '@nestjs/common';
import { PersonasModule } from './personas/personas.module';
import { AbogadosModule } from './abogados/abogados.module';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { PersonasJuridicasModule } from './personas-juridicas/personas-juridicas.module';
import { PersonasDomiciliosModule } from './personas-domicilios/personas-domicilios.module';
import { PersonasIdiomasModule } from './personas-idiomas/personas-idiomas.module';
import { PersonasDetallesModule } from './personas-detalles/personas-detalles.module';

@Module({
  imports: [
    PersonasModule,
    AbogadosModule,
    FuncionariosModule,
    PersonasJuridicasModule,
    PersonasDomiciliosModule,
    PersonasIdiomasModule,
    PersonasDetallesModule,
  ],
})
export class IdentidadModule {}
