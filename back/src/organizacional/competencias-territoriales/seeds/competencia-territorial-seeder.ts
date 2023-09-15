import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import CompetenciaTerritorial from '../entities/competencia-territorial.entity';
import Oficina from 'src/organizacional/oficinas/entities/oficina.entity';
import Municipio from 'src/geografico/municipios/entities/municipio.entity';

export class CompetenciaTerritorialSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const competenciaTerrRepository = dataSource.getRepository(CompetenciaTerritorial);
    const oficinaRepository = dataSource.getRepository(Oficina);
    const municipioRepository = dataSource.getRepository(Municipio);
    const sinDatos = [];

    const data = [
      { id: 1, idOficina: 1, idMunicipio: 2 },
      { id: 2, idOficina: 2, idMunicipio: 2 },
      { id: 3, idOficina: 3, idMunicipio: 2 },
      { id: 4, idOficina: 4, idMunicipio: 2 },
      { id: 5, idOficina: 5, idMunicipio: 2 },
      { id: 6, idOficina: 6, idMunicipio: 2 },
      { id: 7, idOficina: 7, idMunicipio: 2 },
      { id: 8, idOficina: 8, idMunicipio: 2 },
      { id: 9, idOficina: 9, idMunicipio: 2 },
      { id: 10, idOficina: 10, idMunicipio: 2 },
      { id: 11, idOficina: 11, idMunicipio: 2 },
    ];

    for (const element of data) {
      const exist = await competenciaTerrRepository.findOneBy({
        id: element.id,
      });
      if (!exist) {
        const oficina = await oficinaRepository.findOneBy({
          id: element.idOficina,
        });
        const municipio = await municipioRepository.findOneBy({
          id: element.idMunicipio,
        });
        if (oficina && municipio) {
          delete element.id;
          const compTemporal = competenciaTerrRepository.create(element);
          await competenciaTerrRepository.save(compTemporal);
        } else {
          sinDatos.push(element.id);
        }
      }
    }
    console.log('id de competencia territorial sin correspondencia de datos:', sinDatos);
  }
}
