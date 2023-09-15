import { Injectable } from '@nestjs/common';
import { estadoConst } from 'src/common/constants/estado.constant';
import { CreatePersonaDto } from 'src/identidad/personas/dto/create-persona.dto';
import Persona from 'src/identidad/personas/entities/persona.entity';
import { DataSource, EntityManager } from 'typeorm';

@Injectable()
export class PersonasRepository {
  constructor(
    private dataSource: DataSource, // private readonly Persona: Persona
  ) {}

  async findOneById(id: number): Promise<Persona> {
    return await this.dataSource.getRepository(Persona).findOneBy({ id, estado: estadoConst.ACTIVO });
  }

  async findOneByCi(ci: string, complemento: string): Promise<Persona> {
    const qb = this.dataSource
      .getRepository(Persona)
      .createQueryBuilder('personas')
      .where('personas.documentoIdentidad = :ci ', { ci });
    if (complemento.length > 0) qb.andWhere('personas.complemento = :complemento', { complemento });
    return await qb.getOne();
  }

  async findOnePersona(id: number) {
    return await this.dataSource.getRepository(Persona).createQueryBuilder('personas').where({ id }).getOne();
  }

  async create(transaccion: EntityManager, createPersonaDto: CreatePersonaDto): Promise<Persona> {
    const {
      idTipoIdentidad,
      tipoDocumentoIdentidad,
      documentoIdentidad,
      complemento,
      idLugarExpedicion,
      nombres,
      primerApellido,
      segundoApellido,
      fechaNacimiento,
      idNacionalidad,
      idMunicipioNacimiento,
      sexo,
      idEstadoCivil,
      profesionOcupacion,
      fotografia,
      estaFallecido,
      esCiudadanoDigital,
    } = createPersonaDto;

    const existe_persona = await this.findOneByUsuario(documentoIdentidad);

    if (existe_persona) {
      return existe_persona;
    }

    const persona = new Persona();
    persona.idTipoIdentidad = idTipoIdentidad;
    persona.tipoDocumentoIdentidad = tipoDocumentoIdentidad;
    persona.documentoIdentidad = documentoIdentidad;
    persona.nombres = nombres;
    persona.primerApellido = primerApellido;
    persona.segundoApellido = segundoApellido;
    persona.complemento = complemento;
    persona.idLugarExpedicion = idLugarExpedicion;
    persona.estaFallecido = estaFallecido;
    persona.esCiudadanoDigital = esCiudadanoDigital;
    persona.fechaNacimiento = fechaNacimiento;
    persona.idNacionalidad = idNacionalidad;
    persona.idMunicipioNacimiento = idMunicipioNacimiento;
    persona.sexo = sexo;
    persona.idEstadoCivil = idEstadoCivil;
    persona.profesionOcupacion = profesionOcupacion;
    persona.fotografia = fotografia;
    return await transaccion.getRepository(Persona).save(persona);
  }

  async findOneByUsuario(documentoIdentidad) {
    return await this.dataSource.getRepository(Persona).findOneBy({ documentoIdentidad: documentoIdentidad });
  }
}
