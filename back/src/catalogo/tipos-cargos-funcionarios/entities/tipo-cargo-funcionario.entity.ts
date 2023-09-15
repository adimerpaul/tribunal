import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Funcionario from 'src/identidad/funcionarios/entities/funcionario.entity';
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_tipos_cargos_funcionarios', ['id'], { unique: true })
@Entity('tipos_cargos_funcionarios', {
  schema: 'catalogo',
})
export default class TipoCargoFuncionario extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo' })
  codigo: number;

  @Column('character varying', { name: 'descripcion', length: 150 })
  descripcion: string;

  @OneToMany(() => Funcionario, ur => ur.cargo)
  funcionarios: Funcionario[];
}
