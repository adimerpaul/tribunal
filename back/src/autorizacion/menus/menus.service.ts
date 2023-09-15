import { Inject, Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { MenuRepository } from './repositories/menu.repository';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class MenusService {
  constructor(@Inject(MenuRepository) private readonly menuRepository: MenuRepository) {}

  create(createMenuDto: CreateMenuDto) {
    return this.menuRepository.create(createMenuDto);
  }

  findAll(options: PaginationDto) {
    return this.menuRepository.findAll(options);
  }

  findOne(id: number) {
    return this.menuRepository.findOne(id);
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return this.menuRepository.update(id, updateMenuDto);
  }

  remove(id: number) {
    return this.menuRepository.delete(id);
  }

  findByIdRol(idRol: number) {
    return this.menuRepository.findByIdRol(idRol);
  }
}
