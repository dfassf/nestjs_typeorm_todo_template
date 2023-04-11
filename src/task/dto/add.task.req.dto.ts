import { IsArray, IsDate, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class AddTaskRequestDto {
  @IsNumber()
  userId: number;

  @IsString()
  taskName: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  date: string;
}
