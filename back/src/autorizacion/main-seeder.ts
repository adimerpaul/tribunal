import { DataSource } from 'typeorm';
import { runSeeder, Seeder } from 'typeorm-extension';
import { UsuariosSeeder } from './usuarios/seeds/usuarios.seeders';
import { RolesSeeder } from './roles/seeds/roles.seeders';
import { PermisosSeeder } from './permisos/seeds/permisos.seeders';
import { MenusSeeder } from './menus/seeds/menus.seeders';
export class MainSeeder implements Seeder {
  track?: boolean;
  async run(dataSource: DataSource): Promise<any> {
    await runSeeder(dataSource, UsuariosSeeder);
    await runSeeder(dataSource, RolesSeeder);
    await runSeeder(dataSource, PermisosSeeder);
    await runSeeder(dataSource, MenusSeeder);
  }
}
