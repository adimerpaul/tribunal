import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsInt } from 'class-validator';
export class CreateRolPermisoDto {
  @ApiProperty()
  @IsInt({ message: 'El campo identificador de rol debe ser integer' })
  @IsDefined({ message: 'El campo identificador de rol debe estar definido' })
  idRol: number;

  @ApiProperty()
  @IsInt({ message: 'El campo identificador de permiso debe ser integer' })
  @IsDefined({
    message: 'El campo identificador de permiso debe estar definido',
  })
  idPermiso: number;
}
