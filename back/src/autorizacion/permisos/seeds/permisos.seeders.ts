import { RolEntity } from 'src/autorizacion/roles/entities/rol.entity';
import { estadoConst } from 'src/common/constants/estado.constant';
import { DataSource, Repository } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { PermisoEntity } from '../entities/permiso.entity';
import { RolPermisoEntity } from '../entities/rol-permiso.entity';
import * as data from './data.json';
export class PermisosSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const permisoRepository = dataSource.getRepository(PermisoEntity);
    const rolRepository = dataSource.getRepository(RolEntity);
    const rolPermisoRepository = dataSource.getRepository(RolPermisoEntity);

    try {
      if (data.length > 0) {
        for (const itemData of data) {
          const rol = await rolRepository.findOneBy({
            codigo: itemData.rolCodigo,
          });
          if (!rol) console.log('no existe el rol:: ', itemData.rolCodigo);
          else {
            await this.permisos(itemData.permisos, permisoRepository, rolPermisoRepository, rol);
          }
        }
      } else {
        console.log("Data don't exist.");
      }
    } catch (e: any) {
      console.log('Error::: ', e);
      console.log(`Error: ${e.name} - ${e.message}`);
    }
  }

  async permisos(
    permisos,
    permisoRepository: Repository<PermisoEntity>,
    rolPermisoRepository: Repository<RolPermisoEntity>,
    rol: RolEntity,
  ) {
    for (const itemDataPermisos of permisos) {
      const existePermiso = await permisoRepository.findOneBy({
        accion: itemDataPermisos.accion,
        path: itemDataPermisos.path,
        tipo: itemDataPermisos.tipo,
      });
      if (!existePermiso) {
        const item = permisoRepository.create(itemDataPermisos);
        const auxPermiso = await permisoRepository.save(item);
        const permiso = auxPermiso as unknown as PermisoEntity;
        const itemRolPermiso = rolPermisoRepository.create({
          idPermiso: permiso.id,
          idRol: rol.id,
        });
        await rolPermisoRepository.save(itemRolPermiso);
      } else {
        const existeRolPermiso = await rolPermisoRepository.findOneBy({
          idPermiso: existePermiso.id,
          idRol: rol.id,
          estado: estadoConst.ACTIVO,
        });

        if (!existeRolPermiso) {
          const itemRolPermiso = rolPermisoRepository.create({
            idPermiso: existePermiso.id,
            idRol: rol.id,
          });
          await rolPermisoRepository.save(itemRolPermiso);
        }
      }
    }
  }
}
