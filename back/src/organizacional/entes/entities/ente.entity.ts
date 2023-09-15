import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Oficina from 'src/organizacional/oficinas/entities/oficina.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import HorarioAtencion from 'src/organizacional/horarios-atenciones/entities/horario-atencion.entity';
import Departamento from 'src/geografico/departamentos/entities/departamento.entity';

@Index('pk_entes', ['id'], { unique: true })
@Entity('entes', { schema: 'organizacional' })
export default class Ente extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'id_departamento' })
  idDepartamento: number;

  @Column('character varying', { name: 'sigla', length: 3 })
  sigla: string;

  @Column('character varying', { name: 'descripcion', length: 50 })
  descripcion: string;

  @OneToMany(() => HorarioAtencion, horariosAtenciones => horariosAtenciones.idEnte, { lazy: true })
  horariosAtenciones: Promise<HorarioAtencion[]>;

  @OneToMany(() => Oficina, oficinas => oficinas.ente, { lazy: true })
  oficinas: Promise<Oficina[]>;

  @ManyToOne(() => Departamento, departamento => departamento.entes)
  @JoinColumn([{ name: 'id_departamento', referencedColumnName: 'id' }])
  departamento: Departamento;
}
