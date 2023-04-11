import { IsBoolean, IsString } from 'class-validator';

export class UpdateTaskResponseDto {
  @IsBoolean()
  result: boolean;

  @IsString()
  code: string;

  @IsString()
  message: string;
}
