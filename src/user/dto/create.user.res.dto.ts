import { IsBoolean, IsString } from 'class-validator';

export class CreateUserResponseDto {
  @IsBoolean()
  result: boolean;

  @IsString()
  code: string;

  @IsString()
  message: string;
}
