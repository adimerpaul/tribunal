import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Persona from 'src/identidad/personas/entities/persona.entity';
import Causa from 'src/jurisdiccional/causas/entities/causa.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_causas_fiscales', ['id'], { unique: true })
@Entity('causas_fiscales', { schema: 'jurisdiccional' })
export default class CausaFiscal extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  /**PERSONA***/

  @Column('int2', { name: 'id_tipo_responsable' })
  idTipoResponsable: number;

  @Column('int8', { name: 'id_causa_fiscal_mp' })
  idCausaFiscalMp: number;

  /*@Column("character varying", {
      name: "usuario_creacion",
      length: 20,
      default: () => "SESSION_USER",
    })
    usuarioCreacion: string;
  
    @Column("timestamp without time zone", {
      name: "fecha_creacion",
      default: () => "now()",
    })
    fechaCreacion: Date;
  
    @Column("character varying", {
      name: "usuario_modificacion",
      length: 20,
      default: () => "SESSION_USER",
    })
    usuarioModificacion: string;
  
    @Column("timestamp without time zone", {
      name: "fecha_modificacion",
      default: () => "now()",
    })
    fechaModificacion: Date;
  
    @Column("smallint", { name: "estado", default: () => "1" })
    estado: number;
    */

  @ManyToOne(() => Causa, causa => causa.causaFiscal, { lazy: true })
  @JoinColumn([{ name: 'id_causa', referencedColumnName: 'id' }])
  idCausa: Promise<Causa>;

  @ManyToOne(() => Persona, personas => personas.causasFiscales)
  @JoinColumn([{ name: 'id_persona', referencedColumnName: 'id' }])
  idPersona: Persona;
}
