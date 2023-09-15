import { toCamelCase } from 'src/common/utils/words.utils';

/**
 * Convierte una Entidad a un Schema compatible con Swagger a usarse en el response del MessageResponse
 * @param model Modelo tipado o relación del modelo
 * @param props Propiedades recibidas en el decorador de Api Swagger
 * @param recursion Valor que especifica si corresponde a una llamada recursiva (no es un parámetro desde el Api Swagger)
 * @returns Schema compatible para Swagger
 * @author Esnor Noel Enrique Vaca Moreno <enevaca@organojudicial.gob.bo>
 */

export const findFieldsInSqlQuery = (sqlQuery: string): string[] => {
  let selectFields: string = sqlQuery.split('FROM')[0].replace('SELECT', '').replace('DISTINCT', '').replace(/"/g, '');
  selectFields = selectFields
    .replace('to_char(', '')
    .replace(`, 'dd/mm/yyyy HH24:MI')`, '')
    .replace(`, 'yyyymmdd')`, '');
  selectFields = selectFields
    .replace(/array_to_string\(array_agg\(distinct COALESCE\(/g, '')
    .replace(/\)\),', '\)/g, '');
  const arrayFieldsWithAlias: string[] = selectFields.split(',');
  const arrayFields: string[] = arrayFieldsWithAlias.map(field => {
    const fieldSqlorAs = field.split(' AS ');
    const firstField = fieldSqlorAs[0].trim();
    const secondField = fieldSqlorAs[1]?.trim();
    if (firstField.includes('DATE(')) return toCamelCase(secondField);
    return toCamelCase(firstField);
  });

  return arrayFields;
};
