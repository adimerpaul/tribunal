import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import SalaAudiencia from 'src/organizacional/salas-audiencias/entities/sala-audiencia.entity';
import Oficina from 'src/organizacional/oficinas/entities/oficina.entity';

@Index('pk_salas_audiencias_oficinas', ['id'], { unique: true })
@Entity('salas_audiencias_oficinas', {
  schema: 'organizacional',
})
export default class SalaAudienciaOficina extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column({ name: 'id_oficina', nullable: false })
  idOficina: number;


  @ManyToOne(() => Oficina, (oficinas) => oficinas.salasAudienciasOficinas)
  @JoinColumn({ name: 'id_oficina', referencedColumnName: 'id' })
  oficina: Oficina;

  @Column({ name: 'id_sala_audiencia', nullable: false })
  idSalaAudiencia: number;

  @ManyToOne(() => SalaAudiencia, (salasAudiencias) => salasAudiencias.salasAudienciasOficinas)
  @JoinColumn({ name: 'id_sala_audiencia', referencedColumnName: 'id' })
  salaAudiciena: Oficina;
}
