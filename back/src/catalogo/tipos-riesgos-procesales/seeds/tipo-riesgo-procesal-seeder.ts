import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import TipoRiesgoProcesal from '../entities/tipo-riesgo-procesal.entity';

export class TipoRiesgoProcesalSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const tipoRiesgoProcesalRepository = dataSource.getRepository(TipoRiesgoProcesal);

    const data = [
      {
        codigo: 33,
        descripcion: '__RIESGO por ACOSO LABORAL',
      },
      {
        codigo: 31,
        descripcion: '__RIESGO por HURTO AGRAVADO',
      },
      {
        codigo: 37,
        descripcion: '__RIESGO por ATRACO',
      },
    ];

    for (const element of data) {
      const exist = await tipoRiesgoProcesalRepository.findOneBy({ codigo: element.codigo });
      if (!exist) {
        const tipoRiesgoProcesalTemporal = tipoRiesgoProcesalRepository.create(element);
        await tipoRiesgoProcesalRepository.save(tipoRiesgoProcesalTemporal);
      }
    }
  }
}
