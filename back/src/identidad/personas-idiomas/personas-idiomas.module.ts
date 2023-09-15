import { Module } from '@nestjs/common';
import { PersonasIdiomasService } from './personas-idiomas.service';
import { PersonasIdiomasController } from './personas-idiomas.controller';

@Module({
  controllers: [PersonasIdiomasController],
  providers: [PersonasIdiomasService],
})
export class PersonasIdiomasModule {}
