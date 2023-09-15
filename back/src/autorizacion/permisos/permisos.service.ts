import { Inject, Injectable } from '@nestjs/common';
import { CreatePermisoDto } from './dto/create-permiso.dto';
import { UpdatePermisoDto } from './dto/update-permiso.dto';
import { PermisoRepository } from './repositories/permiso.repository';
import { PermisoEntity } from './entities/permiso.entity';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class PermisosService {
  constructor(
    @Inject(PermisoRepository)
    private readonly permisoRepositorio: PermisoRepository /*  @Inject(RolRepository)
    private readonly RolRepositorio: RolRepository, */,
  ) {}

  create(createPermisoDto: CreatePermisoDto) {
    return this.permisoRepositorio.create(createPermisoDto);
  }

  findAll(options: PaginationDto) {
    return this.permisoRepositorio.findAll(options);
  }

  findOne(id: number) {
    return this.permisoRepositorio.findOne(id);
  }

  async findOneByPath(tipo: string, path: string, accion: string) {
    return await this.permisoRepositorio.findOneByPath(tipo, path, accion);
  }

  async update(id: number, updatePermisoDto: UpdatePermisoDto) {
    return await this.permisoRepositorio.update(id, updatePermisoDto);
  }

  async remove(id: number) {
    return await this.permisoRepositorio.delete(id);
  }
  async findUserPermisos(usuario: string, accion: string, path: string): Promise<boolean> {
    const permisos = await this.permisoRepositorio.getUsuarioPermisos(usuario, accion);
    console.log('Permisos::: ', permisos);
    return this.validarPAth(path, permisos);
  }
  validarPAth(path: string, permisos: PermisoEntity[]): boolean {
    for (const permiso of permisos) {
      const regexPath = permiso.path.replace(/:[^/]+/g, '([^/]+)');
      const regex = new RegExp(`^${regexPath}$`);
      if (regex.test(path)) {
        return true;
      }
    }

    return false;
  }
}
