import { IsOptional } from 'class-validator';

export class SuccessResponseDto {
  @IsOptional()
  status: number;

  @IsOptional()
  message: string;

  @IsOptional()
  response: any;

  @IsOptional()
  error: boolean;
}
