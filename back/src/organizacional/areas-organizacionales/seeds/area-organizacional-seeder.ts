import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import AreaOrganizacional from '../entities/area-organizacional.entity';
import { Materia } from 'src/catalogo/materias/entities/materia.entity';

export class AreaOrganizacionalSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const areaOrganizacionalRepository = dataSource.getRepository(AreaOrganizacional);
    const materiaRepository = dataSource.getRepository(Materia);
    const sinDatos = [];
    const data = [
      { id: 1, idMateria: 0, descripcion: 'Tribunal Supremo', nivelSorteo: 1 },
      {
        id: 2,
        idMateria: 0,
        descripcion: 'Tribunal Agroambiental',
        nivelSorteo: 1,
      },
      {
        id: 3,
        idMateria: 0,
        descripcion: 'Consejo de la Magistratura',
        nivelSorteo: 1,
      },
      {
        id: 4,
        idMateria: 0,
        descripcion: 'Dirección Administrativa y Financiera',
        nivelSorteo: 1,
      },
      {
        id: 5,
        idMateria: 0,
        descripcion: 'Consejo de la Magistratura TDJ',
        nivelSorteo: 1,
      },
      {
        id: 6,
        idMateria: 0,
        descripcion: 'Oficina Departamental Administrativa y Financiera TDJ',
        nivelSorteo: 1,
      },
      {
        id: 7,
        idMateria: 0,
        descripcion: 'Consejo de la Magistratura Oruro',
        nivelSorteo: 1,
      },
      {
        id: 8,
        idMateria: 0,
        descripcion: 'Oficina departamental administrativa financiera de Oruro',
        nivelSorteo: 1,
      },
      {
        id: 9,
        idMateria: 0,
        descripcion: 'Consejo de la Magistratura Tarija',
        nivelSorteo: 1,
      },
      {
        id: 10,
        idMateria: 0,
        descripcion: 'Oficina departamental administrativa y financiera de Tarija',
        nivelSorteo: 1,
      },
      {
        id: 11,
        idMateria: 0,
        descripcion: 'Consejo de la Magistratura Beni',
        nivelSorteo: 1,
      },
      {
        id: 12,
        idMateria: 0,
        descripcion: 'Oficina departamental administrativa financiera de Beni',
        nivelSorteo: 1,
      },
      {
        id: 13,
        idMateria: 0,
        descripcion: 'Consejo de la Magistratura Pando',
        nivelSorteo: 1,
      },
      {
        id: 14,
        idMateria: 0,
        descripcion: 'Oficina departamental administrativa financiera de Pando',
        nivelSorteo: 1,
      },
      {
        id: 15,
        idMateria: 0,
        descripcion: 'Consejo de la Magistratura Potosí',
        nivelSorteo: 1,
      },
      {
        id: 16,
        idMateria: 0,
        descripcion: 'Oficina departamental administrativa financiera de Potosí',
        nivelSorteo: 1,
      },
      {
        id: 17,
        idMateria: 0,
        descripcion: 'Área de servicios judiciales',
        nivelSorteo: 1,
      },
      {
        id: 18,
        idMateria: 0,
        descripcion: 'Área de comunicación y relaciones públicas',
        nivelSorteo: 1,
      },
      {
        id: 19,
        idMateria: 0,
        descripcion: 'Equipo profesional interdisciplinario',
        nivelSorteo: 1,
      },
      {
        id: 20,
        idMateria: 0,
        descripcion: 'Área de servicios generales',
        nivelSorteo: 1,
      },
      {
        id: 21,
        idMateria: 0,
        descripcion: 'Consejo de la Magistratura La Paz',
        nivelSorteo: 1,
      },
      {
        id: 22,
        idMateria: 0,
        descripcion: 'Oficina departamental administrativa financiera de La Paz',
        nivelSorteo: 1,
      },
      {
        id: 23,
        idMateria: 0,
        descripcion: 'Consejo de la Magistratura Cochabamba',
        nivelSorteo: 1,
      },
      {
        id: 24,
        idMateria: 0,
        descripcion: 'Oficina departamental administrativa financiera de Cochabamba',
        nivelSorteo: 1,
      },
      {
        id: 25,
        idMateria: 0,
        descripcion: 'secretaria de sala plena',
        nivelSorteo: 1,
      },
      {
        id: 26,
        idMateria: 0,
        descripcion: 'secretaria presidencia',
        nivelSorteo: 1,
      },
      {
        id: 27,
        idMateria: 0,
        descripcion: 'Consejo de la Magistratura Santa Cruz',
        nivelSorteo: 1,
      },
      {
        id: 28,
        idMateria: 0,
        descripcion: 'Oficina departamental administrativa financiera de Santa Cruz',
        nivelSorteo: 1,
      },
      {
        id: 29,
        idMateria: 0,
        descripcion: 'Oficinas Gestoras de Procesos',
        nivelSorteo: 1,
      },
      {
        id: 30,
        idMateria: 1,
        descripcion: 'Tribunales de sentencia Penal',
        nivelSorteo: 1,
      },
      {
        id: 31,
        idMateria: 1,
        descripcion: 'Juzgados de sentencia Penal',
        nivelSorteo: 1,
      },
      {
        id: 32,
        idMateria: 1,
        descripcion: 'Juzgados de violencia contra la mujer',
        nivelSorteo: 1,
      },
      {
        id: 33,
        idMateria: 1,
        descripcion: 'Juzgados anticorrupción',
        nivelSorteo: 1,
      },
      {
        id: 34,
        idMateria: 1,
        descripcion: 'Tribunales de sentencia anticorrupción',
        nivelSorteo: 1,
      },
      {
        id: 35,
        idMateria: 1,
        descripcion: 'Tribunales de sentencia contra la violencia hacia la mujer',
        nivelSorteo: 1,
      },
      {
        id: 36,
        idMateria: 1,
        descripcion: 'Tribunales de sentencia Penal de El alto',
        nivelSorteo: 1,
      },
      {
        id: 37,
        idMateria: 1,
        descripcion: 'Juzgados de ejecución Penal de El alto',
        nivelSorteo: 1,
      },
      {
        id: 38,
        idMateria: 1,
        descripcion: 'Juzgados de instrucción Penal de El alto',
        nivelSorteo: 1,
      },
      {
        id: 39,
        idMateria: 1,
        descripcion: 'Juzgados de instrucción anticorrupción de El Alto',
        nivelSorteo: 1,
      },
      {
        id: 40,
        idMateria: 1,
        descripcion: 'Juzgados de sentencia anticorrupción',
        nivelSorteo: 1,
      },
      {
        id: 41,
        idMateria: 1,
        descripcion: 'Juzgados de sentencia contra la violencia hacia la mujer',
        nivelSorteo: 1,
      },
      {
        id: 42,
        idMateria: 1,
        descripcion: 'Juzgados de pérdida de dominio',
        nivelSorteo: 1,
      },
      {
        id: 43,
        idMateria: 2,
        descripcion: 'Juzgados Públicos Civiles',
        nivelSorteo: 1,
      },
      {
        id: 44,
        idMateria: 3,
        descripcion: 'Juzgados Públicos Comerciales',
        nivelSorteo: 1,
      },
      {
        id: 45,
        idMateria: 4,
        descripcion: 'Juzgados Públicos de Familia',
        nivelSorteo: 1,
      },
      {
        id: 46,
        idMateria: 5,
        descripcion: 'Juzgados Públicos de niñez y adolescencia',
        nivelSorteo: 1,
      },
      {
        id: 47,
        idMateria: 5,
        descripcion: 'Juzgados Públicos de niñez y adolescencia de El Alto',
        nivelSorteo: 1,
      },
      {
        id: 48,
        idMateria: 6,
        descripcion: 'Juzgados Públicos de trabajo',
        nivelSorteo: 1,
      },
      {
        id: 49,
        idMateria: 6,
        descripcion: 'Juzgados Públicos de trabajo de El Alto',
        nivelSorteo: 1,
      },
      {
        id: 50,
        idMateria: 7,
        descripcion: 'Juzgados Públicos de Seguridad Social',
        nivelSorteo: 1,
      },
      {
        id: 51,
        idMateria: 8,
        descripcion: 'Juzgados Públicos Administrativos coactivo fiscal',
        nivelSorteo: 1,
      },
      {
        id: 52,
        idMateria: 8,
        descripcion: 'Juzgados Públicos administrativo coactivo fiscal de El Alto',
        nivelSorteo: 1,
      },
      {
        id: 53,
        idMateria: 12,
        descripcion: 'Tribunal Departamental de Justicia de Chuquisaca',
        nivelSorteo: 1,
      },
      {
        id: 54,
        idMateria: 12,
        descripcion: 'Tribunal Departamental de Justicia de La Paz',
        nivelSorteo: 1,
      },
      {
        id: 55,
        idMateria: 12,
        descripcion: 'Tribunal Departamental de Justicia de Cochabamba',
        nivelSorteo: 1,
      },
      {
        id: 56,
        idMateria: 12,
        descripcion: 'Tribunal Departamental de Justicia de Oruro',
        nivelSorteo: 1,
      },
      {
        id: 57,
        idMateria: 12,
        descripcion: 'Tribunal Departamental de Justicia de Potosí',
        nivelSorteo: 1,
      },
      {
        id: 58,
        idMateria: 12,
        descripcion: 'Tribunal Departamental de Justicia de Santa Cruz',
        nivelSorteo: 1,
      },
      {
        id: 59,
        idMateria: 12,
        descripcion: 'Tribunal Departamental de Justicia de Tarija',
        nivelSorteo: 1,
      },
      {
        id: 60,
        idMateria: 12,
        descripcion: 'Tribunal Departamental de Justicia de Beni',
        nivelSorteo: 1,
      },
      {
        id: 61,
        idMateria: 12,
        descripcion: 'Tribunal Departamental de Justicia de Pando',
        nivelSorteo: 1,
      },
      {
        id: 62,
        idMateria: 16,
        descripcion: 'Juzgados Agroambientales',
        nivelSorteo: 1,
      },
      {
        id: 63,
        idMateria: 16,
        descripcion: 'Juzgados Agroambientales de Tarija',
        nivelSorteo: 1,
      },
      {
        id: 64,
        idMateria: 16,
        descripcion: 'Juzgados Agroambientales de Beni',
        nivelSorteo: 1,
      },
      {
        id: 65,
        idMateria: 16,
        descripcion: 'Juzgados Agroambientales de Pando',
        nivelSorteo: 1,
      },
      {
        id: 66,
        idMateria: 16,
        descripcion: 'Juzgados Agroambientales de Potosí',
        nivelSorteo: 1,
      },
      {
        id: 67,
        idMateria: 16,
        descripcion: 'Juzgados Agroambientales de La Paz',
        nivelSorteo: 1,
      },
      {
        id: 68,
        idMateria: 16,
        descripcion: 'Juzgados Agroambientales de Cochabamba',
        nivelSorteo: 1,
      },
      {
        id: 69,
        idMateria: 16,
        descripcion: 'Juzgados Agroambientales de Santa Cruz',
        nivelSorteo: 1,
      },
      { id: 70, idMateria: 16, descripcion: 'Conciliadores', nivelSorteo: 1 },
      {
        id: 71,
        idMateria: 17,
        descripcion: 'Juzgados Públicos coactivo fiscal y tributaria',
        nivelSorteo: 1,
      },
    ];

    for (const element of data) {
      const exist = await areaOrganizacionalRepository.findOneBy({
        id: element.id,
      });
      if (!exist) {
        const materia = await materiaRepository.findOneBy({
          id: element.idMateria,
        });
        if (materia) {
          delete element.id;
          const areaTemporal = areaOrganizacionalRepository.create(element);
          await areaOrganizacionalRepository.save(areaTemporal);
        } else {
          sinDatos.push(element.id);
        }
      }
    }
    console.log('id de area organizacional sin correspondencia de datos:', sinDatos);
  }
}
