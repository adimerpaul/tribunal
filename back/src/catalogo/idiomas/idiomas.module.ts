import { Module } from '@nestjs/common';
import { IdiomasService } from './idiomas.service';
import { IdiomasController } from './idiomas.controller';
import { IdiomaRepository } from './repositories/idioma.repository';

@Module({
  controllers: [IdiomasController],
  providers: [IdiomasService, IdiomaRepository],
})
export class IdiomasModule {}
