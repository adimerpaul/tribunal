import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import CompetenciaOrganizacional from '../entities/competencia-organizacional.entity';
import Oficina from 'src/organizacional/oficinas/entities/oficina.entity';
import AreaOrganizacional from 'src/organizacional/areas-organizacionales/entities/area-organizacional.entity';

export class CompetenciaOrganizacionalSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const competenciaOrgRepository = dataSource.getRepository(CompetenciaOrganizacional);
    const oficinaRepository = dataSource.getRepository(Oficina);
    const areaOrgRepository = dataSource.getRepository(AreaOrganizacional);
    const sinDatos = [];

    const data = [
      { id: 1, idOficina: 1, idAreaOrganizacional: 1 },
      { id: 2, idOficina: 2, idAreaOrganizacional: 1 },
      { id: 3, idOficina: 3, idAreaOrganizacional: 1 },
      { id: 4, idOficina: 4, idAreaOrganizacional: 1 },
      { id: 5, idOficina: 5, idAreaOrganizacional: 1 },
      { id: 6, idOficina: 6, idAreaOrganizacional: 1 },
      { id: 7, idOficina: 7, idAreaOrganizacional: 1 },
      { id: 8, idOficina: 8, idAreaOrganizacional: 1 },
      { id: 9, idOficina: 9, idAreaOrganizacional: 1 },
      { id: 10, idOficina: 10, idAreaOrganizacional: 1 },
      { id: 11, idOficina: 11, idAreaOrganizacional: 1 },
      { id: 12, idOficina: 12, idAreaOrganizacional: 1 },
    ];

    for (const element of data) {
      const exist = await competenciaOrgRepository.findOneBy({
        id: element.id,
      });
      if (!exist) {
        const oficina = await oficinaRepository.findOneBy({
          id: element.idOficina,
        });
        const areaOrg = await areaOrgRepository.findOneBy({
          id: element.idAreaOrganizacional,
        });
        if (oficina && areaOrg) {
          delete element.id;
          const compTemporal = competenciaOrgRepository.create(element);
          await competenciaOrgRepository.save(compTemporal);
        } else {
          sinDatos.push(element.id);
        }
      }
    }
    console.log('id de competencia org sin correspondencia de datos:', sinDatos);
  }
}
