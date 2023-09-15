import { estadoConst } from 'src/common/constants/estado.constant';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';

export const insertCamposAuditoria = (usuario: string): AuditoriaEntity => {
  return {
    usuarioCreacion: usuario,
    fechaCreacion: expect.any(Date),
    usuarioModificacion: usuario,
    fechaModificacion: expect.any(Date),
    estado: estadoConst.ACTIVO,
  } as AuditoriaEntity;
};

export const updateCamposAuditoria = (usuario: string): AuditoriaEntity => {
  return {
    usuarioModificacion: usuario,
    fechaModificacion: expect.any(Date),
  } as AuditoriaEntity;
};
