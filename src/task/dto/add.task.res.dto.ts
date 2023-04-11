import { IsBoolean, IsString } from 'class-validator';

export class AddTaskResponseDto {
  @IsBoolean()
  result: boolean;

  @IsString()
  code: string;

  @IsString()
  message: string;
}
