import { createWriteStream, existsSync, mkdirSync, readFileSync } from 'fs';
import { SegipResultDto } from 'src/interoperabilidad/segip/dto/segip-result.dto';
import { join } from 'path';
import { spawnSync } from 'child_process';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { MessageEnum } from '../constants/message.enum';

const createDirectory = (dirName: string): void => {
  if (!existsSync(dirName)) {
    mkdirSync(dirName, { recursive: true });
  }
};

export const saveFileBase64 = async (fileName: string, subPath: string, file: string) => {
  try {
    createDirectory(join(process.env.PATH_DOCS, process.env.PATH_RELATIVO, subPath));
    const fotografiaArr = Buffer.from(file, 'base64');
    const path = (await saveFile(fileName, subPath, fotografiaArr)).path;
    return path;
  } catch (e) {
    throw new BadRequestException({
      message: MessageEnum.UNSAVED_FILE,
      datta: null,
    });
  }
};
export const saveFile = async (fileName: string, subPath: string, file: Buffer) => {
  try {
    createDirectory(join(process.env.PATH_DOCS, process.env.PATH_RELATIVO, subPath));
    const relativePath = join(process.env.PATH_RELATIVO, subPath, fileName);
    const fullPath = join(process.env.PATH_DOCS, relativePath);
    const fileStream = createWriteStream(fullPath, { autoClose: true });
    fileStream.write(file);
    fileStream.end();

    return {
      path: relativePath.replace(/\\/g, '/'),
      sizeKB: parseFloat((file.length / 1024).toFixed(2)),
    };
  } catch (e) {
    throw new BadRequestException({
      message: MessageEnum.UNSAVED_FILE,
      data: null,
    });
  }
};

export async function pdfExtractDataAndImage(
  documentoIdentidad: string,
  archivoBase64: string,
): Promise<SegipResultDto> {
  const cmd = {
    exe: 'python',
    pyFile: 'src/assets/scripts/py/pdfExtractV3.py',
  };
  const proccess = spawnSync(cmd.exe, [cmd.pyFile, archivoBase64], {
    shell: false,
  });
  if (proccess.error || proccess.stderr.toString().length > 0) {
    throw new NotFoundException(MessageEnum.ERROR_PYTHON_PDF, null);
  }

  const infoPdf = JSON.parse(proccess.stdout.toString()) as SegipResultDto;
  console.log(infoPdf);

  infoPdf.pathFotografia = await saveFileBase64(`${documentoIdentidad}.jpg`, 'personas', infoPdf.fotografia);
  return infoPdf;
}

export async function fileAsBase64(fileName: string): Promise<string | undefined> {
  try {
    const fullPath = join(process.env.PATH_DOCS, fileName);

    return existsSync(fullPath) ? readFileSync(fullPath).toString('base64') : undefined;
  } catch (e) {
    throw new BadRequestException({
      message: MessageEnum.NOT_EXIST_FILE,
      data: null,
    });
  }
}
