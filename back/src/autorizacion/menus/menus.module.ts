import { Module } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenusController } from './menus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuRepository } from './repositories/menu.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MenuRepository])],
  controllers: [MenusController],
  providers: [MenusService, MenuRepository],
  exports: [MenusService, MenuRepository],
})
export class MenusModule {}
