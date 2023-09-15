import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  APP_PORT: Joi.number().required(),

  DB_TYPE: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(5432).required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_SCHEMA_AUTORIZACION: Joi.string().required(),
  DB_SCHEMA_GEOFRAFICO: Joi.string().required(),
  DB_SCHEMA_IDENTIDAD: Joi.string().required(),
  DB_SCHEMA_JURISDICCIONAL: Joi.string().required(),
  DB_SCHEMA_ORGANIZACIONAL: Joi.string().required(),
  DB_SCHEMA_PARAMETRICAS: Joi.string().required(),
});
