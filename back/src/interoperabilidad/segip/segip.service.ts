import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { TipoEstadoCivilRepository } from 'src/catalogo/tipos-estados-civiles/repositories/tipo-estado-civil.repository';
import { CON_SEGIP } from 'src/catalogo/tipos-identidades/constants/tipo-identidad.constant';
import { MessageEnum } from 'src/common/constants/message.enum';
import { fileAsBase64, pdfExtractDataAndImage } from 'src/common/utils/file.util';
import { DepartamentoRepository } from 'src/geografico/departamentos/repositories/departamento.repository';
import { MunicipioRepository } from 'src/geografico/municipios/repositories/municipio.repository';
import { PaisRepository } from 'src/geografico/paises/repositories/pais.repository';
import { GeneroConst } from 'src/identidad/personas/constants/genero.constant';
import { CreatePersonaDto } from 'src/identidad/personas/dto/create-persona.dto';
import Persona from 'src/identidad/personas/entities/persona.entity';
import { PersonasService } from 'src/identidad/personas/personas.service';
import {
  DOCUMENTO_IDENTIDAD,
  SEGIP_ESTADO_NO_SE_ENCONTRO_REGISTRO,
  SEGIP_ESTADO_NO_SE_REALIZO_CONSULTA,
  SEGIP_ESTADO_REGISTRO_CON_OBSERVACION,
  SEGIP_ESTADO_SE_ENCONTRO_MAS_DE_UN_REGISTRO,
  SEGIP_ESTADO_SE_ENCONTRO_REGISTRO,
} from './constants/segip.constant';
import { SegipResultDto } from './dto/segip-result.dto';
import soapRequest = require('easy-soap-request');

@Injectable()
export class SegipService {
  constructor(
    readonly personaService: PersonasService,
    readonly departamentoRepository: DepartamentoRepository,
    readonly paisRepository: PaisRepository,
    readonly municipioRepository: MunicipioRepository,
    readonly tipoEstadoCivilRepository: TipoEstadoCivilRepository,
  ) {}

  async procesoRegistroSegip(respuestaSegip: SegipResultDto) {
    if (respuestaSegip.estado == SEGIP_ESTADO_SE_ENCONTRO_REGISTRO) {
      const crearPersona = new CreatePersonaDto();
      crearPersona.idTipoIdentidad = CON_SEGIP;
      crearPersona.tipoDocumentoIdentidad = DOCUMENTO_IDENTIDAD;
      crearPersona.documentoIdentidad = respuestaSegip.cedulaIdentidad;
      crearPersona.complemento = respuestaSegip.complemento;
      crearPersona.idLugarExpedicion = (
        await this.departamentoRepository.findOneByDescripcion(respuestaSegip.lugarExpedicion)
      )?.id;
      crearPersona.nombres = respuestaSegip.nombres;
      crearPersona.primerApellido = respuestaSegip.paterno;
      crearPersona.segundoApellido = respuestaSegip.materno;
      crearPersona.fechaNacimiento = respuestaSegip.fechaNacimiento;

      const nacionalidad = await this.paisRepository.findOneByDescripcion(respuestaSegip.paisNacimiento);
      if (nacionalidad) crearPersona.idNacionalidad = nacionalidad.id;

      const municipio = await this.municipioRepository.findOneByDescripcion(respuestaSegip.localidadNacimiento);
      if (municipio) crearPersona.idMunicipioNacimiento = municipio.id;
      crearPersona.sexo = this.obtenerSexo(respuestaSegip.estadoCivil);

      const estadoCivil = await this.tipoEstadoCivilRepository.findOneByDescripcion(
        respuestaSegip.estadoCivil.substring(-1),
      );
      if (estadoCivil) crearPersona.idEstadoCivil = estadoCivil.id;
      crearPersona.profesionOcupacion = respuestaSegip.profesion;
      crearPersona.fotografia = respuestaSegip.pathFotografia;
      crearPersona.esCiudadanoDigital = false; //TODO Completar consumiendo servicio de AGETIC cuando este desarrollado

      const resultPersona = await this.personaService.create(crearPersona);
      resultPersona.fotografia = respuestaSegip.fotografia;
    } else {
      throw new BadRequestException({
        message: respuestaSegip.mensaje,
        data: respuestaSegip.estado,
      });
    }
  }

  async consultaPorCi(ci: string): Promise<Persona> {
    const persona: Persona = await this.personaService.busquedaCi(ci);
    if (persona) {
      persona.fotografia = await fileAsBase64(persona.fotografia);

      if (!persona.fotografia) persona.fotografia = readFileSync(`./src/assets/user_profile.png`).toString('base64');
      return persona;
    } else {
      const respuestaSegip = await this.consultarDirectaSegip(ci);
      await this.procesoRegistroSegip(respuestaSegip);
    }
    return persona;
  }

  async consultarDirectaSegip(ciConsulta: string): Promise<SegipResultDto> {
    try {
      let persona: SegipResultDto = null;
      const ciConComplemento = ciConsulta.split('-');
      const ci = ciConComplemento[0];
      const complemento = ciConComplemento[1] || '';
      const { codigoRespuesta, archivoBase64 } = await this.consumoSOAP(ci, complemento);
      switch (codigoRespuesta) {
        case SEGIP_ESTADO_SE_ENCONTRO_REGISTRO:
          const documentoBase64 = archivoBase64;
          persona = await pdfExtractDataAndImage(ciConsulta, documentoBase64);
          const ci = persona.cedulaIdentidad.split('-');
          persona.cedulaIdentidad = ci[0];
          persona.complemento = ci.length > 1 ? ci[1] : '';
          persona.padre = '';
          const [dia, mes, anio] = persona.fechaNacimiento.split('/');

          const fechaIso = `${anio}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;

          persona.fechaNacimiento = fechaIso;
          persona.mensaje = MessageEnum.SEGIP_ESTADO_SE_ENCONTRO_REGISTRO;
          persona.estado = codigoRespuesta;
          persona.origen = 'SEGIP';
          break;
        case SEGIP_ESTADO_NO_SE_REALIZO_CONSULTA:
          persona = new SegipResultDto(
            SEGIP_ESTADO_NO_SE_REALIZO_CONSULTA,
            MessageEnum.SEGIP_ESTADO_NO_SE_REALIZO_CONSULTA,
          );
          break;
        case SEGIP_ESTADO_NO_SE_ENCONTRO_REGISTRO:
          persona = new SegipResultDto(
            SEGIP_ESTADO_NO_SE_ENCONTRO_REGISTRO,
            MessageEnum.SEGIP_ESTADO_NO_SE_ENCONTRO_REGISTRO,
          );
          break;
        case SEGIP_ESTADO_SE_ENCONTRO_MAS_DE_UN_REGISTRO:
          persona = new SegipResultDto(
            SEGIP_ESTADO_SE_ENCONTRO_MAS_DE_UN_REGISTRO,
            MessageEnum.SEGIP_ESTADO_SE_ENCONTRO_MAS_DE_UN_REGISTRO,
          );
          break;
        case SEGIP_ESTADO_REGISTRO_CON_OBSERVACION:
          persona = new SegipResultDto(
            SEGIP_ESTADO_REGISTRO_CON_OBSERVACION,
            MessageEnum.SEGIP_ESTADO_REGISTRO_CON_OBSERVACION,
          );
          break;
        default:
          break;
      }
      return persona;
    } catch (e) {
      throw new HttpException(
        {
          message: MessageEnum.ERROR_SEGIP,
          data: e.message,
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }
  async consumoSOAP(ci: string, complemento: string) {
    const urlSegip = process.env.SEGIP_URL;
    const sampleHeadersSegip = {
      'Content-Type': 'text/xml;charset=UTF-8',
      soapAction: `http://tempuri.org/IServicioExternoInstitucion/ConsultaDatoPersonaCertificacion`,
    };
    const xmlSegip = `
        <Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
            <Body>
                <ConsultaDatoPersonaCertificacion xmlns="http://tempuri.org/">
                    <pCodigoInstitucion>${process.env.CODIGO_INSITUCION}</pCodigoInstitucion>
                    <pUsuario>${process.env.SEGIP_USUARIO}</pUsuario>
                    <pContrasenia>${process.env.SEGIP_PASSWORD}</pContrasenia>
                    <pClaveAccesoUsuarioFinal>${process.env.CLAVE_ACCESO_USUARIO_FINAL}</pClaveAccesoUsuarioFinal>
                    <pNumeroAutorizacion>${process.env.NUMERO_AUTORIZACION}</pNumeroAutorizacion>
                    <pNumeroDocumento>${ci}</pNumeroDocumento>
                    <pComplemento>${complemento}</pComplemento>
                    <pNombre></pNombre>
                    <pPrimerApellido></pPrimerApellido>
                    <pSegundoApellido></pSegundoApellido>
                    <pFechaNacimiento></pFechaNacimiento>
                </ConsultaDatoPersonaCertificacion>
            </Body>
        </Envelope>
        `;

    const { response } = await soapRequest({
      url: urlSegip,
      headers: sampleHeadersSegip,
      xml: xmlSegip,
    });

    // convert XML to JSON
    const { codigoRespuesta, archivoBase64 } = this.obtenerCodigoArchivo(response.body);
    return { codigoRespuesta, archivoBase64 };
  }
  obtenerCodigoArchivo(body: string) {
    const regex = /<a:ReporteCertificacion>(.*?)<\/a:ReporteCertificacion>/s;
    const regex2 = /<CodigoRespuesta(.*?)">(.*?)<\/CodigoRespuesta>/s;

    const match = body.match(regex);
    const archivoBase64 = match ? match[1] : null;

    const match2 = body.match(regex2);
    const codigoRespuesta = match2 ? match2[2] : null;
    return { codigoRespuesta: parseInt(codigoRespuesta), archivoBase64 };
  }
  obtenerSexo(estadoCivil: string): string {
    if (estadoCivil.endsWith('O')) return GeneroConst.MASCULINO;
    else if (estadoCivil.endsWith('A')) return GeneroConst.FEMENINO;
    else return GeneroConst.OTRO;
  }
}
