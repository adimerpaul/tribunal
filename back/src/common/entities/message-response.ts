import { ApiProperty } from '@nestjs/swagger';

export class MessageResponse<T> {
  @ApiProperty()
  error?: boolean; // Código de respuesta

  @ApiProperty()
  message: string; // Mensaje de texto de respuesta, así como un resultado más complejo tipo JSON

  @ApiProperty()
  response: T; // data_tipo_JSON

  @ApiProperty()
  status?: number; // Código de respuesta

  constructor(message: string, response: T, status?: number, error?: boolean) {
    this.error = error;
    this.message = message;
    this.response = response;
    this.status = status;
  }
}
