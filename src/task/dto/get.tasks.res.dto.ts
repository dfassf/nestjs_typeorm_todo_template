import { IsArray, IsBoolean, IsDate, IsDateString, IsNumber, IsString } from 'class-validator';
import { TaskEntity } from '../entity/task';

export class GetTasksResponseDto {
  @IsBoolean()
  result: boolean;

  @IsArray()
  data: TaskEntity[];

  @IsString()
  code: string;

  @IsString()
  message: string;
}
