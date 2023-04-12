import { IsBoolean, IsObject, IsString } from 'class-validator';
import { UserDto } from './user.dto';

export class GetUserResponseDto {
  @IsBoolean()
  result: boolean;

  @IsObject()
  data: UserDto;

  @IsString()
  code: string;

  @IsString()
  message: string;
}
