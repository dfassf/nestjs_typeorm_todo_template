import { IsArray, IsDate, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserRequestDto {
  @IsString()
  @IsOptional()
  userName?: string;
}
