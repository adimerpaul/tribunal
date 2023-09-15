import { DataSource, Repository } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { UsuariosEntity } from '../entities/usuario.entity';
import Persona from 'src/identidad/personas/entities/persona.entity';
import { RolEntity } from 'src/autorizacion/roles/entities/rol.entity';
import { UsuarioRolEntity } from 'src/autorizacion/roles/entities/usuario-rol.entity';
import * as data from './data.json';
export class UsuariosSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const usuarioRepository = dataSource.getRepository(UsuariosEntity);
    const personaRepository = dataSource.getRepository(Persona);
    const rolesRepository = dataSource.getRepository(RolEntity);
    const usuarioRolRepository = dataSource.getRepository(UsuarioRolEntity);
    try {
      if (data.length > 0) {
        for (const itemData of data) {
          await createUser(usuarioRepository, personaRepository, rolesRepository, usuarioRolRepository, itemData);
        }
      } else {
        console.log("Data don't exist.");
      }
    } catch (e: any) {
      console.log(`Error: ${e.name} - ${e.message}`);
      console.log(e);
    }
  }
}
async function createUser(
  usuarioRepository: Repository<UsuariosEntity>,
  personaRepository: Repository<Persona>,
  rolesRepository: Repository<RolEntity>,
  usuarioRolRepository: Repository<UsuarioRolEntity>,
  itemData: any,
) {
  const existe = await usuarioRepository.findOneBy({
    usuario: itemData.usuario,
  });

  if (!existe) {
    const persona = await personaRepository.findOneBy({
      documentoIdentidad: itemData.ciPersona,
    });

    if (!persona) {
      console.log('No existe persona', itemData.ciPersona);
      return;
    }

    itemData.idPersona = persona.id;
    const item = usuarioRepository.create(itemData);
    const auxUsuario = await usuarioRepository.save(item);
    const usuarioGuardado = auxUsuario as unknown as UsuariosEntity;
    for (const rolData of itemData.roles) {
      await createOrUpdateRole(rolesRepository, usuarioRolRepository, rolData, usuarioGuardado);
    }

    console.log(`${itemData.usuario} ... seeded!`);
  } else {
    for (const rolData of itemData.roles) {
      await createOrUpdateRole(rolesRepository, usuarioRolRepository, rolData, existe);
    }
  }
}

async function createOrUpdateRole(
  rolesRepository: Repository<RolEntity>,
  usuarioRolRepository: Repository<UsuarioRolEntity>,
  rolData: any,
  usuarioGuardado: UsuariosEntity,
) {
  const existeRol = await rolesRepository.findOneBy({
    codigo: rolData.codigo,
  });

  let dataUsuarioRol: { idUsuario: number; idRol: number };

  if (existeRol) {
    const existeUsuarioRol = await usuarioRolRepository.findOneBy({
      idRol: existeRol.id,
      idUsuario: usuarioGuardado.id,
    });

    if (!existeUsuarioRol) {
      dataUsuarioRol = {
        idUsuario: usuarioGuardado.id,
        idRol: existeRol.id,
      };

      const itemUsuarioRol = usuarioRolRepository.create(dataUsuarioRol);
      await usuarioRolRepository.save(itemUsuarioRol);
    }
  } else {
    const itemRol = rolesRepository.create(rolData);
    const auxRol = await rolesRepository.save(itemRol);
    const rol = auxRol as unknown as RolEntity;
    dataUsuarioRol = {
      idUsuario: usuarioGuardado.id,
      idRol: rol.id,
    };

    const itemUsuarioRol = usuarioRolRepository.create(dataUsuarioRol);
    await usuarioRolRepository.save(itemUsuarioRol);
  }
}
