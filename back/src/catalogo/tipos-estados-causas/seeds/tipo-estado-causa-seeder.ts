import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import TipoEstadoCausa from '../entities/tipo-estado-causa.entity';

export class TipoEstadoCausaSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(TipoEstadoCausa);

    const data = [
      { codigo: 1, descripcion: 'Abierto' },
      { codigo: 1, descripcion: 'Desestimado' },
      { codigo: 1, descripcion: 'Salida alternativa' },
      { codigo: 1, descripcion: 'Rechazado' },
      { codigo: 11, descripcion: 'Sobreseído' },
      { codigo: 1, descripcion: 'Extinguido' },
      { codigo: 1, descripcion: 'Abandonado' },
      { codigo: 1, descripcion: 'Con condena' },
      { codigo: 1, descripcion: 'Con absolución' },
      { codigo: 1, descripcion: 'Remisión' },
      { codigo: 1, descripcion: 'Conexitud o acumulación' },
      { codigo: 1, descripcion: 'Declinatoria competencia' },
      { codigo: 1, descripcion: 'Cerrado otros' },
      { codigo: 1, descripcion: 'Abreviado' },
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
