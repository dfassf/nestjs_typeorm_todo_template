import { IsArray, IsBoolean, IsDate, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserResponseDto {
  @IsBoolean()
  result: boolean;

  @IsString()
  code: string;

  @IsString()
  message: string;
}
