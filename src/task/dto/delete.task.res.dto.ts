import { IsBoolean, IsString } from 'class-validator';

export class DeleteTaskResponseDto {
  @IsBoolean()
  result: boolean;

  @IsString()
  code: string;

  @IsString()
  message: string;
}
