import { IsBoolean, IsString } from 'class-validator';

export class AddUserResponseDto {
  @IsBoolean()
  result: boolean;

  @IsString()
  code: string;

  @IsString()
  message: string;
}
