import { IsArray, IsDate, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateTaskRequestDto {
  @IsNumber()
  userId: number;

  @IsString()
  @IsOptional()
  taskName?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  @IsOptional()
  date?: string;
}
