import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import CompetenciaGestora from '../entities/competencia-gestora.entity';
import Oficina from 'src/organizacional/oficinas/entities/oficina.entity';

export class CompetenciaGestoraSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const compGestoraRepository = dataSource.getRepository(CompetenciaGestora);
    const oficinaRepository = dataSource.getRepository(Oficina);
    const sinDatos = [];
    const data = [
      {
        id: 15,
        idGestora: 1,
        idOficina: 25558,
        semilla: 278,
        carga: 123,
        periodicidad: 2,
        enlaceAudienciaVirtual: '',
      },
      {
        id: 9,
        idGestora: 1,
        idOficina: 3,
        semilla: 2,
        carga: 123,
        periodicidad: 2,
        enlaceAudienciaVirtual: '',
      },
      {
        id: 8,
        idGestora: 1,
        idOficina: 4,
        semilla: 2,
        carga: 123,
        periodicidad: 2,
        enlaceAudienciaVirtual: '',
      },
    ];

    for (const element of data) {
      const exist = await compGestoraRepository.findOneBy({
        id: element.id,
      });
      if (!exist) {
        const oficina = await oficinaRepository.findOneBy({
          id: element.idGestora,
        });
        const oficina2 = await oficinaRepository.findOneBy({
          id: element.idOficina,
        });
        if (oficina && oficina2) {
          delete element.id;
          const compTemporal = compGestoraRepository.create(element);
          await compGestoraRepository.save(compTemporal);
        } else {
          sinDatos.push(element.id);
        }
      }
    }
    console.log('id de competencia gestora sin correspondencia de datos:', sinDatos);
  }
}
