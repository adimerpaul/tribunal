import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import OficinaFiscalia from '../entities/oficinas-fiscalia.entity';

export class OficinaFiscaliaSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const oficinaFRepository = dataSource.getRepository(OficinaFiscalia);

    const data = [
      { id: 1, idMunicipio: 1, codigo: 0, descripcion: 'oficina1' },
      { id: 2, idMunicipio: 1, codigo: 0, descripcion: 'oficina2' },
      { id: 3, idMunicipio: 1, codigo: 0, descripcion: 'oficina3' },
    ];

    for (const element of data) {
      const exist = await oficinaFRepository.findOneBy({
        id: element.id,
      });
      if (!exist) {
        delete element.id;
        const oficinaTemporal = oficinaFRepository.create(element);
        await oficinaFRepository.save(oficinaTemporal);
      }
    }
  }
}
