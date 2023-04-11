import { IsArray, IsBoolean, IsDate, IsDateString, IsNumber, IsString } from 'class-validator';
import { UserEntity } from '../entity/user';

export class GetUserResponseDto {
  @IsBoolean()
  result: boolean;

  @IsArray()
  data: UserEntity;

  @IsString()
  code: string;

  @IsString()
  message: string;
}
