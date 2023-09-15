import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import CompetenciaFiscalia from '../entities/competencias-fiscalia.entity';
import Oficina from 'src/organizacional/oficinas/entities/oficina.entity';
import OficinaFiscalia from 'src/organizacional/oficinas-fiscalia/entities/oficinas-fiscalia.entity';

export class CompetenciaFiscaliaSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const competenciaFisRepository = dataSource.getRepository(CompetenciaFiscalia);
    const oficinaRepository = dataSource.getRepository(Oficina);
    const oficinaFRepository = dataSource.getRepository(OficinaFiscalia);
    const sinDatos = [];
    const data = [
      { id: 1, idOficina: 2, idOficinaFiscalia: 1 },
      { id: 2, idOficina: 2, idOficinaFiscalia: 2 },
      { id: 3, idOficina: 2, idOficinaFiscalia: 3 },
    ];

    for (const element of data) {
      const exist = await competenciaFisRepository.findOneBy({
        id: element.id,
      });
      if (!exist) {
        const oficina = await oficinaRepository.findOneBy({
          id: element.idOficina,
        });
        const oficinaf = await oficinaFRepository.findOneBy({
          id: element.idOficinaFiscalia,
        });
        if (oficina && oficinaf) {
          delete element.id;
          const compTemporal = competenciaFisRepository.create(element);
          await competenciaFisRepository.save(compTemporal);
        } else {
          sinDatos.push(element.id);
        }
      }
    }
    console.log('id de competencia Fiscalia sin correspondencia de datos:', sinDatos);
  }
}
