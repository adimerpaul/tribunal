import { RolEntity } from 'src/autorizacion/roles/entities/rol.entity';
import { estadoConst } from 'src/common/constants/estado.constant';
import { DataSource, Repository } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Menu } from '../entities/menu.entity';
import { RolMenu } from '../entities/rol-menu.entity';
import * as data from './data.json';
export class MenusSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const menuRepository = dataSource.getRepository(Menu);
    const rolRepository = dataSource.getRepository(RolEntity);
    const rolMenuRepository = dataSource.getRepository(RolMenu);

    try {
      if (data.length > 0) {
        for (const itemData of data) {
          const rol = await rolRepository.findOneBy({
            codigo: itemData.rolCodigo,
          });
          if (!rol) console.log('no existe el rol:: ', itemData.rolCodigo);
          else {
            await this.menus(itemData.menus, rol, menuRepository, rolMenuRepository);
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

  async menus(dataMenu, rol: RolEntity, menuRepository: Repository<Menu>, rolMenuRepository: Repository<RolMenu>) {
    for (const itemDataMenu of dataMenu) {
      const existeMenu = await menuRepository.findOneBy({
        nombre: itemDataMenu.nombre,
        descripcion: itemDataMenu.descripcion,
      });

      if (!existeMenu) {
        const item = menuRepository.create(itemDataMenu);
        const auxMenu = await menuRepository.save(item);
        const menu = auxMenu as unknown as Menu;
        const itemRolMenu = rolMenuRepository.create({
          idMenu: menu.id,
          idRol: rol.id,
        });
        await rolMenuRepository.save(itemRolMenu);
        if (itemDataMenu.subMenus.length > 0) {
          await this.subMenus(itemDataMenu.subMenus, rol, menuRepository, rolMenuRepository, menu);
        }
      } else {
        const existeRolMenu = await rolMenuRepository.findOneBy({
          idMenu: existeMenu.id,
          idRol: rol.id,
          estado: estadoConst.ACTIVO,
        });

        if (!existeRolMenu) {
          const itemRolPermiso = rolMenuRepository.create({
            idMenu: existeMenu.id,
            idRol: rol.id,
          });
          await rolMenuRepository.save(itemRolPermiso);
        }
      }
    }
  }

  async subMenus(
    dataSubMenu,
    rol: RolEntity,
    menuRepository: Repository<Menu>,
    rolMenuRepository: Repository<RolMenu>,
    menu: Menu,
  ) {
    for (const itemDataSubMenu of dataSubMenu) {
      const existeSubMenu = await menuRepository.findOneBy({
        nombre: itemDataSubMenu.nombre,
        descripcion: itemDataSubMenu.descripcion,
      });

      console.log('Dataa:::: ', existeSubMenu);
      if (!existeSubMenu) {
        itemDataSubMenu.idPadre = menu.id;
        console.log('itemDataSubMenu:::: ', itemDataSubMenu);
        const item = menuRepository.create(itemDataSubMenu);
        const auxSubMenu = await menuRepository.save(item);
        const subMenu = auxSubMenu as unknown as Menu;

        console.log('subMenu:::: ', subMenu);
        const itemRolMenu = rolMenuRepository.create({
          idMenu: subMenu.id,
          idRol: rol.id,
        });
        await rolMenuRepository.save(itemRolMenu);
      } else {
        const existeRolMenu = await rolMenuRepository.findOneBy({
          idMenu: existeSubMenu.id,
          idRol: rol.id,
          estado: estadoConst.ACTIVO,
        });

        if (!existeRolMenu) {
          const itemRolPermiso = rolMenuRepository.create({
            idMenu: existeSubMenu.id,
            idRol: rol.id,
          });
          await rolMenuRepository.save(itemRolPermiso);
        }
      }
    }
  }
}
