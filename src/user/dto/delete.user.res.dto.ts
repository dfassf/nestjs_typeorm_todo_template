import { IsBoolean, IsString } from 'class-validator';

export class DeleteUserResponseDto {
  @IsBoolean()
  result: boolean;

  @IsString()
  code: string;

  @IsString()
  message: string;
}
