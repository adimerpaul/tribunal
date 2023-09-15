import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import Ente from '../entities/ente.entity';

export class EnteSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const enteRepository = dataSource.getRepository(Ente);

    const data = [
      {
        id: 1,
        descripcion: 'Dirección Administrativa y Financiera',
        sigla: 'DAF',
        idDepartamento: 1,
      },
      {
        id: 2,
        descripcion: 'Tribunal Supremo de Justicia',
        sigla: 'TSJ',
        idDepartamento: 1,
      },
      {
        id: 3,
        descripcion: 'Tribunal Agroambiental',
        sigla: 'TAG',
        idDepartamento: 1,
      },
      {
        id: 4,
        descripcion: 'Consejo de la Magistratura',
        sigla: 'CMG',
        idDepartamento: 1,
      },
      {
        id: 5,
        descripcion: 'Tribunal Departamenal de Justicia de Chquisaca',
        sigla: 'CHQ',
        idDepartamento: 1,
      },
      {
        id: 6,
        descripcion: 'Tribunal Departamental de Justicia de La Paz',
        sigla: 'LPZ',
        idDepartamento: 1,
      },
      {
        id: 7,
        descripcion: 'Tribunal Departamental de Justicia de Cochabamba',
        sigla: 'CBB',
        idDepartamento: 1,
      },
      {
        id: 8,
        descripcion: 'Tribunal Departamental de Justicia de Oruro',
        sigla: 'ORU',
        idDepartamento: 1,
      },
      {
        id: 9,
        descripcion: 'Tribunal Departamental de Justicia de Potosí',
        sigla: 'PTS',
        idDepartamento: 1,
      },
      {
        id: 10,
        descripcion: 'Tribunal Departamental de Justicia de Tarija',
        sigla: 'TJA',
        idDepartamento: 1,
      },
      {
        id: 11,
        descripcion: 'Tribunal Departamental de Justicia de Santa Cruz',
        sigla: 'SCZ',
        idDepartamento: 1,
      },
      {
        id: 12,
        descripcion: 'Tribunal Departamental de Justicia de Beni',
        sigla: 'BNI',
        idDepartamento: 1,
      },
      {
        id: 13,
        descripcion: 'Tribunal Departamental de Justicia de Pando',
        sigla: 'PND',
        idDepartamento: 1,
      },
      { id: 14, descripcion: 'Externo', sigla: 'EX', idDepartamento: 1 },
    ];

    for (const element of data) {
      const exist = await enteRepository.findOneBy({
        sigla: element.sigla,
      });
      if (!exist) {
        delete element.id;
        const enteTemporal = enteRepository.create(element);
        await enteRepository.save(enteTemporal);
      }
    }
  }
}
