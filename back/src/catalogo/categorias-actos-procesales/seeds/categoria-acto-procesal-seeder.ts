import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import CategoriaActoProcesal from '../entities/categoria-acto-procesal.entity';

export class CategoriaActoProcesalSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(CategoriaActoProcesal);

    const data = [
      { codigo: 1, descripcion: 'Actas' },
      { codigo: 1, descripcion: 'Actas de Secretaría' },
      { codigo: 1, descripcion: 'Actos Procesales Realizados Por Secretaría' },
      { codigo: 1, descripcion: 'Audiencias' },
      { codigo: 1, descripcion: 'Autos' },
      { codigo: 1, descripcion: 'Cargos' },
      { codigo: 1, descripcion: 'Decretos' },
      { codigo: 1, descripcion: 'Decretos' },
      { codigo: 1, descripcion: 'Devoluciones' },
      { codigo: 1, descripcion: 'Informes de Secretaría' },
      { codigo: 1, descripcion: 'Informes Realizados dentro del Proceso' },
      { codigo: 1, descripcion: 'Informes Realizados por la OGP' },
      {
        codigo: 1,
        descripcion: 'Informes Remitidos (Ventanillao sistema OGP)',
      },
      { codigo: 1, descripcion: 'Mandamientos' },
      { codigo: 1, descripcion: 'Memoriales' },
      { codigo: 1, descripcion: 'Notificaciones' },
      { codigo: 1, descripcion: 'Oficios' },
      { codigo: 1, descripcion: 'Pruebas' },
      { codigo: 1, descripcion: 'Remisiones' },
      { codigo: 1, descripcion: 'Sentencias' },
      { codigo: 1, descripcion: 'Sorteos' },
    ];

    for (const element of data) {
      const exist = await repository.findOneBy({
        descripcion: element.descripcion,
      });
      if (!exist) {
        const temporal = repository.create(element);
        await repository.save(temporal);
      }
    }
  }
}
